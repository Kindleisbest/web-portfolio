exports.handler = async (event) => {
  const user = event.clientContext.user;

  if (!user) {
    return {
      statusCode: 401,
      body: "Not logged in",
    };
  }

  const email = user.email;

  // ⚠️ You would fetch submissions from Netlify API here
  // then filter by email

  return {
    statusCode: 200,
    body: JSON.stringify({
      submissions: [
        { subject: "Test 1", message: "Hello" },
        { subject: "Test 2", message: "Another one" }
      ]
    }),
  };
};