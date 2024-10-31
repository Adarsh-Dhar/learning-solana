use anchor_lang::prelude::*;

declare_id!("BYKQaeGSXAivrhtiLVckcQ17GTjRh9A5tqcRVnG2EG17");

#[program]
pub mod hello_world {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}