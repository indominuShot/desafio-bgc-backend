import dynamoConfig from '../../services/dynamoDB';

export async function listAll() {
  const minions = await dynamoConfig.scan({ TableName: 'Minions' });

  return {
    statusCode: 200,
    body: JSON.stringify(minions),
  };
}
