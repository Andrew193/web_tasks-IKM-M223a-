import java.util.HashMap;
import java.util.Map;

// Singleton class for each storage repository
class Storage {
    private static Map<String, Storage> instances = new HashMap<>();
    private String type;
    private String content;

    private Storage(String type) {
        this.type = type;
    }

    public static Storage getInstance(String type) {
        if (!instances.containsKey(type)) {
            instances.put(type, new Storage(type));
        }
        return instances.get(type);
    }

    public void uploadFile(String filename, String content) {
        this.content = content;
        // Logic for uploading a file to the storage repository
        System.out.println("Uploaded to " + type + ": " + filename);
    }

    public void downloadFile(String filename) {
        // Logic for downloading a file from the storage repository
        System.out.println("Downloaded from " + type + ": " + filename + ". File content: " + this.content);
    }
}

// User class
class User {
    private final String storageType;
    private final String name;

    public User(String name, String storageType) {
        this.storageType = storageType;
        this.name = name;
    }

    public void uploadFile(String filename, String content) {
        Storage storage = Storage.getInstance(storageType);
        storage.uploadFile(filename, content);
    }

    public void downloadFile(String filename) {
        Storage storage = Storage.getInstance(storageType);
        storage.downloadFile(filename);
    }
}

public class lab_single_lab_work_1 {
    public static void main(String[] args) {
        // Creating a user with a local system disk storage
        User user1 = new User("User1", "LocalDisk");
        user1.uploadFile("file1.txt", "Content of file 1");
        user1.downloadFile("file1.txt");
        user1.downloadFile("file2.txt");

        // Creating a user with Amazon S3 storage
        User user2 = new User("User2", "AmazonS3");
        user2.uploadFile("file3.txt", "Content of file 3");
        user2.downloadFile("file3.txt");
    }
}
