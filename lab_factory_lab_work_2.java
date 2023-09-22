abstract class SocialNetwork {
    protected String username;
    protected String password;

    public SocialNetwork(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public abstract void login();

    public abstract void publishPost(String message);

    public abstract void logout();
}

class Facebook extends SocialNetwork {
    protected String login;
    protected String password;

    public Facebook(String username, String password) {
        super(username, password);
        this.login = username;
        this.password = password;
    }

    @Override
    public void login() {
        System.out.println("Logged in to Facebook Credentials: email - " + this.login + ", password - " + this.password);
    }

    @Override
    public void publishPost(String message) {
        System.out.println("Posted on Facebook: " + message);
    }

    @Override
    public void logout() {
        System.out.println("Logged out from Facebook. User: " + this.login);
    }
}

class LinkedIn extends SocialNetwork {
    protected String email;
    protected String password;

    public LinkedIn(String email, String password) {
        super(email, password);
        this.email = email;
        this.password = password;
    }

    @Override
    public void login() {
        System.out.println("Logged in to LinkedIn. Credentials: email - " + this.email + ", password - " + this.password);
    }

    @Override
    public void publishPost(String message) {
        System.out.println("Posted on LinkedIn: " + message);
    }

    @Override
    public void logout() {
        System.out.println("Logged out from LinkedIn. User: " + this.email);
    }
}

interface SocialNetworkFactory {
    SocialNetwork createInstance(String infoKey, String password);
}

class FacebookFactory implements SocialNetworkFactory {
    @Override
    public SocialNetwork createInstance(String username, String password) {
        return new Facebook(username, password);
    }
}

class LinkedInFactory implements SocialNetworkFactory {
    @Override
    public SocialNetwork createInstance(String email, String password) {
        return new LinkedIn(email, password);
    }
}

public class lab_factory_lab_work_2 {
    public static void main(String[] args) {
        SocialNetworkFactory linkedInFactory;
        linkedInFactory = new LinkedInFactory();

        SocialNetworkFactory facebookFactory;
        facebookFactory = new FacebookFactory();

        //face
        SocialNetwork socialNetworkFacebook = facebookFactory.createInstance("username", "password");


        //link
        SocialNetwork socialNetworkLinkedIn = linkedInFactory.createInstance("username@gmail.com", "password");

        //link use
        socialNetworkLinkedIn.login();
        socialNetworkLinkedIn.publishPost("Hello, Factory Method Pattern! ( socialNetworkLinkedIn )");
        socialNetworkLinkedIn.logout();

        System.out.println("-----------------------------------------");
        //face use
        socialNetworkFacebook.login();
        socialNetworkFacebook.publishPost("Hello, Factory Method Pattern! ( socialNetworkFacebook )");
        socialNetworkFacebook.logout();
    }
}
