#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("dashforge")
  .description("DashForge - Dashboard framework CLI")
  .version("0.0.1");

program
  .command("create <name>")
  .description("Create a new dashboard app")
  .action((name) => {
    console.log(`Creating DashForge app: ${name}`);
  });

program.parse();
