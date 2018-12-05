# clt-widget-test-site

## Installation 
`npm i`

## Development
`npm start`

## Deployment
`npm build`

- Upload contents of `/dist/` to s3 bucket `clt-widget-test`
- Invalidate CloudFront Distribution E31TRBFB09RG35

## Testing

### S3 Static Site
http://clt-widget-test.s3-website.us-east-2.amazonaws.com/

### CloudFront Distribution
https://d1eygxh1incfdo.cloudfront.net/

### Supported query params
- `hostname`: `https://dev.uship.com`
- `clientId`: `1`
- `height`: `800`
- `width`: `500`