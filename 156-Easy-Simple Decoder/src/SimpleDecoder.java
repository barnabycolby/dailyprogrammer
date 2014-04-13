import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.File;

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
		byte[] data = Files.readAllBytes(inputFilePath);

		// Minus 4 from all the bytes
		for (int i = 0; i < data.length; i++) {
			data[i] -= 4;
		}

		// Write the byte array back to the output file
		BufferedOutputStream outputStream = new BufferedOutputStream(new FileOutputStream(new File(outputFile)));
		outputStream.write(data);
		outputStream.flush();
	}
}
