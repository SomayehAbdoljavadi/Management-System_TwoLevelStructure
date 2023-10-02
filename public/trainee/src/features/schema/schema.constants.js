export const SCHEMA_CONST = getSchemaUrl();

function getSchemaUrl() {
  return {
    schemaEasy: {
      url: 'app/myAppSchema/schemaEasy',
      action: {name: 'schemaEasy'}
    },
    schemaHard: {
      url: 'app/myAppSchema/schemaHard',
      action: {name: 'schemaHard'}
    }
  };
}
