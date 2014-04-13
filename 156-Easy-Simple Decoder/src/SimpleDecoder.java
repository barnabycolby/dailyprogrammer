import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class SimpleDecoder {
	public static void main(String args[]) throws Exception {
		// Check that we have the correct number of arguments
		if (args.length != 2) {
			System.out.println("Usage: SimpleDecoder inputFile outputFile");
			return;
		}

		// Rename the variables to make the code easier to read
		String inputFile = args[0];
		String outputFile = args[1];

		// Read the file into a byte array
		Path inputFilePath = Paths.get(inputFile);
		byte[] inputData = Files.readAllBytes(inputFilePath);
	}
}
