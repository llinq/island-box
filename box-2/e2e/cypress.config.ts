import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run box-2:serve',
        production: 'nx run box-2:preview',
      },
      ciWebServerCommand: 'nx run box-2:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
