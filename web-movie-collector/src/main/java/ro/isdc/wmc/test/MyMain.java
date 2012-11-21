package ro.isdc.wmc.test;

public class MyMain {

	public static void main(String [] args){
		Thread t1 = new MovieRetrieverThread();
		t1.setName("t1");
		Thread t2 = new MovieRetrieverThread();
		t2.setName("t2");
		Thread t3 = new MovieRetrieverThread();
		t3.setName("t3");
		Thread t4 = new MovieRetrieverThread();
		t4.setName("t4");
		Thread t5 = new MovieRetrieverThread();
		t5.setName("t5");
		Thread t6 = new MovieRetrieverThread();
		t6.setName("t6");
		Thread t7 = new MovieRetrieverThread();
		t7.setName("t7");
		t1.start();
		t2.start();
		t3.start();
		t4.start();
		t5.start();
		t6.start();
		t7.start();
	}
}
