// Amazon Cognito configuration

const poolData = {
    UserPoolId: "ap-south-1_QZT7vDGVW",
    ClientId: "470o9e2j7gd3888smk5cqqba9i"
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);