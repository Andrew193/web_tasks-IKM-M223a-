class Notification {
    send(title, message) {
        throw new Error('Method send() must be implemented');
    }
}

class EmailNotification extends Notification {
    constructor(adminEmail) {
        super();
        this.adminEmail = adminEmail;
    }

    send(title, message) {
        // Simulate sending an email
        console.log(`Sent email with title '${title}' to '${this.adminEmail}' that says '${message}'.`);
    }
}

class SmsNotification extends Notification {
    constructor(phoneNumber, sender) {
        super();
        this.phoneNumber = phoneNumber;
        this.sender = sender;
    }

    send(title, message) {
        // Simulate sending an SMS
        console.log(`Sent SMS with title '${title}' to '${this.phoneNumber}' from '${this.sender}' that says '${message}'.`);
    }
}

class SlackNotification extends Notification {
    constructor(login, apiKey, chatId) {
        super();
        this.login = login;
        this.apiKey = apiKey;
        this.chatId = chatId;
    }

    send(title, message) {
        // Simulate sending a Slack message
        console.log(`Sent Slack message with title '${title}' to chat '${this.chatId}' that says '${message}'.`);
    }
}

class SlackNotificationAdapter extends Notification {
    constructor(slackNotification) {
        super();
        this.slackNotification = slackNotification;
    }

    send(title, message) {
        this.slackNotification.send(title, message);
    }
}

class SmsNotificationAdapter extends Notification {
    constructor(smsNotification) {
        super();
        this.smsNotification = smsNotification;
    }

    send(title, message) {
        this.smsNotification.send(title, message);
    }
}

const emailNotification = new EmailNotification('admin@gmail.com');
emailNotification.send('Test email string', 'It is a test email.');

const slackNotification = new SlackNotification('slack_login_string', 'slack_api_key', 'slack_chat_id');
const slackNotificationAdapter = new SlackNotificationAdapter(slackNotification);
slackNotificationAdapter.send('Test Slack', 'It is a test Slack message.');

const smsNotification = new SmsNotification('380930140801', 'Andrew ( sender )');
const smsNotificationAdapter = new SmsNotificationAdapter(smsNotification);
smsNotificationAdapter.send('Test SMS ( message )', 'It is a test SMS message.');
