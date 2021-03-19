import * as DynamoDB from 'aws-sdk/clients/dynamodb';

const dynamoDB = new DynamoDB.DocumentClient();

const dynamoConfig = {
  get: (params) => dynamoDB.get(params).promise(),
  put: (params) => dynamoDB.put(params).promise(),
  query: (params) => dynamoDB.query(params).promise(),
  scan: (params) => dynamoDB.scan(params).promise(),
  update: (params) => dynamoDB.update(params).promise(),
  delete: (params) => dynamoDB.delete(params).promise(),
};

export default dynamoConfig;
