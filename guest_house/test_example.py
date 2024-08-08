import re
from playwright.sync_api import Page, expect, sync_playwright, Playwright
from pathlib import Path
from typing import List
from dotenv import load_dotenv

load_dotenv()

screen_shot_dir = Path(__file__).parent / "screenshots"

save_screenshot: bool = False


def test_backend_login(context):
    page = context.new_page()
    page.goto("http://localhost:8000/admin")
    # login
    page.fill('input[name="username"]', load_dotenv("ADMIN_USER"))
    page.fill('input[name="password"]', load_dotenv("ADMIN_PASSWORD"))
    page.click('input[type=submit]')
    # page.wait_for_load_state("networkidle")
    page.screenshot(path=screen_shot_dir /
                    "example1.png") if save_screenshot else None
    # go to other page with login
    new_page = context.new_page()
    new_page.goto("http://localhost:8000/accounts/user")
    new_page.screenshot(path=screen_shot_dir /
                        "./example3.png") if save_screenshot else None


def test_backend_login(context):
    page = context.new_page()
    page.goto("http://localhost:8000/")
    # login
    response = page.wait_for_response(re.compile(r".*/login/"))


def run(playwright: Playwright):
    chromium = playwright.chromium  # or "firefox" or "webkit".
    browser = chromium.launch()
    context = browser.new_context()
    test_backend_login(context)
    browser.close()


with sync_playwright() as playwright:
    run(playwright)
