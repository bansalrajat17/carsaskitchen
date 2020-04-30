public class pdfextractor {

    public static void main(String[] args) {
        PDFNet.initialize();

        // Relative path to the folder containing test files.
        String input_path = "/home/rajat/Downloads/target_file.pdf";
        // string output_path = "../../TestFiles/Output/";
        boolean example1_basic = true;
        boolean example2_xml = false;
        boolean example3_wordlist = false;
        boolean example4_advanced = true;
        boolean example5_low_level = false;

        // Sample code showing how to use high-level text extraction APIs.
        try {
            PDFDoc doc = new PDFDoc(input_path);
            doc.initSecurityHandler();

            Page page = doc.getPage(1);
            if (page == null) 
                System.out.println("Page not found.");
            

            TextExtractor txt = new TextExtractor();
            txt.begin(page);  // Read the page.
            // Other options you may want to consider...
            // txt.Begin(page, 0, TextExtractor.ProcessingFlags.e_no_dup_remove);
            // txt.Begin(page, 0, TextExtractor.ProcessingFlags.e_remove_hidden_text);
            // ...

            // Example 1. Get all text on the page in a single string.
            // Words will be separated with space or new line characters.
            if (example1_basic) {
                // Get the word count.
                System.out.println("Word Count: " + txt.getWordCount());

                System.out.println("\n\n- GetAsText --------------------------\n" + txt.getAsText());
                System.out.println("-----------------------------------------------------------");
            }
        }catch(Exception e){
            e.getMessage();
        }
	
    }
}