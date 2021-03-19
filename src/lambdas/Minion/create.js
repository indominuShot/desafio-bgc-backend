import { v1 } from 'uuid';
import dynamoConfig from '../../services/dynamoDB';
import getDate from '../../Utils/getDate';

export async function index(event) {
  const data = JSON.parse(event.body);

  const params = {
    TableName: 'Minions',
    Item: {
      id: v1(),
      ...data,
      createdAt: getDate(),
      updatedAt: getDate(),
    },
  };

  const response = await dynamoConfig.put(params);

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
}
