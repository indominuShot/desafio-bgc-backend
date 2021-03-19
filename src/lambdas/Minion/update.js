import dynamoConfig from '../../services/dynamoDB';
import getDate from '../../Utils/getDate';

export async function index(event) {
  const { id } = event.pathParameters;
  const data = JSON.parse(event.body);

  const params = {
    TableName: 'Minions',
    Item: {
      id,
      ...data,
      updatedAt: getDate(),
    },
  };

  const response = await dynamoConfig.put(params);

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
}
