# slack-screenshot
posts a screenshot to slack on heroku deploy

By Alexander Chia
ac@alexchia.com

## environmental variables to set

- URL2PNG_APIKEY
- URL2PNG_TOKEN
- SLACK_WEBHOOK_URL
- TARGET_WEBSITE
- SECRET

## setup instructions

### 1. Get a URL2PNG account

- Register for a new account at url2png.com
- Set URL2PNG_APIKEY and URL2PNG_TOKEN appropriately

### 2. Deploy and test that url2png is working

- Set TARGET_WEBSITE to the website that you want screenshots of
- Deploy this app to heroku
```
heroku create <herokuappname>
git push heroku master

```
- Go to http://<herokuappname>.herokuapp.com/api/test and verify that a screenshot is generated successfully
- Set SECRET to some secret key

### 3. set up the heroku deploy hook

in your app directory,

```
heroku addons:create deployhooks:http --url=http://<herokuappname>.herokuapp.com/api/deploy/<your-secret>
```

### 4. set up slack incoming webhook

- Go to https://yourcompany.slack.com/services/new/incoming-webhook
- set up the webhook to post to the channel of your choice and press Add
- set SLACK_WEBHOOK_URL to the url given to you on slack

### 5. Deploy to heroku
```
git push heroku master
```