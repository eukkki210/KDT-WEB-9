package generic;

import java.util.ArrayList;

class MyCustomList {
	ArrayList<String> list = new ArrayList<>();
	
	public void addElement(String element) {
		list.add(element);
	}
	
	public void removeElement(String element) {
		list.remove(element);
	}
}

// 제네리 클래스
class MyCustomListGeneric<T> {
	ArrayList<T> list = new ArrayList<>();
	
	public void addElement(T element) {
		list.add(element);
	}
	
	public void removeElement(T element) {
		list.remove(element);
	}

	// <T>: 타입파라미터, 명시적으로 해당 메서드가 제너릭이라는 것을 표현
	public T get(int i) {
		return list.get(i);
	}
}

public class GenericExample {

	public static void main(String[] args) {
		MyCustomList list = new MyCustomList();
		list.addElement("element");
		
		MyCustomListGeneric<String> list2 = new MyCustomListGeneric<>();
		list2.addElement("element1");
		list2.addElement("element2");
		list2.addElement("element3");
		String text = list2.get(1);
		System.out.println(text);
		
		MyCustomListGeneric<Integer> list3 = new MyCustomListGeneric<>();
		list3.addElement(3);
		list3.addElement(6);
		list3.addElement(9);
		String text = list2.get(1);
		System.out.println(text);
	}

}
