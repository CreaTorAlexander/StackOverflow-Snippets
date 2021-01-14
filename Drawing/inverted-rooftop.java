package debuggingpoly;

public class Pattern {
	public static void main(String[] args) {
		int counter = 0;
		 for(int i = 0; i < 6; i++) {
			 for (int j = 0; j < 11 ; j++) {
				 if(j > (-1 + counter) && j < (11 - counter)) {
					 System.out.print("*");
				 }else {
					 System.out.print("\\");
				 }
				 
				 
			 }
			 System.out.println();
			 counter ++;
		 }
	}
}
