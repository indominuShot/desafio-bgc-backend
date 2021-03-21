import { v1 } from 'uuid';
import nodemailer from 'nodemailer';

import dynamoConfig from '../../services/dynamoDB';
import getDate from '../../Utils/getDate';
import emailStructure from '../../Utils/emailStructure';

export async function index(event) {
  const { data, email } = JSON.parse(event.body);

  const params = {
    TableName: 'Sales',
    Item: {
      id: v1(),
      ...data,
      createdAt: getDate(),
      updatedAt: getDate(),
    },
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: `$${process.env.EMAIL_SECRET}`,
    },
  });

  await transporter.sendMail({
    from: `Shop Minions <${process.env.EMAIL_USER}>`, // sender address
    to: `luang193@gmail.com, ${email}, thiago@bgcbrasil.com.br`, // list of receivers
    subject: 'Compra confirmada', // Subject line
    html: emailStructure,
  });

  const response = await dynamoConfig.put(params);

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
}
