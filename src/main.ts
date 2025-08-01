import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { builderDevTools } from "@builder.io/dev-tools/angular";
import { App } from "./app/app";
bootstrapApplication(App, appConfig)
    .catch((err) => console.error(err));

builderDevTools().catch((err: Error) =>
    console.error("Error starting dev tools:", err)
  );