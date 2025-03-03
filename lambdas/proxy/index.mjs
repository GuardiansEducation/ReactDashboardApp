import axios from "axios";

export const handler = async (event) => {
  try {

    if (event.httpMethod === "OPTIONS") {
      return {
          statusCode: 200,
          headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "*",
              "Access-Control-Allow-Headers": "*",
          },
          body: JSON.stringify({ message: "CORS preflight successful!" }),
      };
    }

    // Get the URL from the query parameters
    const queryParams = event.queryStringParameters || {};
    const targetUrl = queryParams.url;

    if (!targetUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing 'url' parameter" }),
      };
    }

    const response = await axios.get(`https://api.football-data.org/v4/${targetUrl}`, {
      headers: { "X-Auth-Token": "0c70e711cdf345ee8dd9e2d0571938cf" },
    });

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" }, // Allow CORS
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
};
