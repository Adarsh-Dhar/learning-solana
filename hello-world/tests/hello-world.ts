import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { HelloWorld } from "../target/types/hello_world";
import assert from "assert";


describe("hello-world", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.HelloWorld as Program<HelloWorld>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });

  it("Can create a message", async () => {
    const message = anchor.web3.Keypair.generate();
    const messageContent = "Hello, World!";
    await program.rpc.createMessage(messageContent, {
      accounts : {
        message : message.publicKey,
        author : anchor.web3.SystemProgram.programId,
        systemProgram : anchor.web3.SystemProgram.programId,

      },
      signers : [message],

    });


    const messageAccount = await program.account.message.fetch(message.publicKey);
    

    assert.equal(
      messageAccount.author.toBase58(),
      provider.wallet.publicKey.toBase58()
    )
  })
});
