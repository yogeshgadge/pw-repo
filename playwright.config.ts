import { defineConfig } from "@playwright/test";
import { pwAppConfig as pwC1 } from "./projects/ui-app1/e2e/playwright.config";
import { pwAppConfig as pwC2 } from "./projects/ui-app2/e2e/playwright.config";

export default defineConfig(pwC1, pwC2);
