"use server"
import { Page, Browser, chromium } from 'playwright';

export async function generatePDF(url: string, path: string) {
  const start = Date.now();
  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();
  await page.goto(url);
  const publicPath = `public/${path}`;
  await page.pdf({ path: publicPath });
  await browser.close();
  const end = Date.now();
  return `Time taken to generate PDF: ${end - start}ms`;
}

