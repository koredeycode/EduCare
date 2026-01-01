import { generateFiles } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';

const openapi = createOpenAPI({
  input: ['./openapi/school-api-v1.yaml'],
});

void generateFiles({
  input: openapi,
  output: './content/docs/api-reference',
  includeDescription: true,
});

