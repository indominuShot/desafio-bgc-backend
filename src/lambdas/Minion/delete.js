import dynamoConfig from '../../services/dynamoDB';

export async function index(event) {
  const { id } = event.pathParameters;
  const params = {
    TableName: 'Minions',
    Key: { id },
  };

  const response = await dynamoConfig.delete(params);

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
}
