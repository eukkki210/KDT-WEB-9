package java_first_project;

import java.util.ArrayList;

public class ArrayListEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<String> list = new ArrayList<String>();
		
		// add(element)
		list.add("Google");
		System.out.println(list);
		
		// add(index, element_
		list.add(0, "Amazon");
		System.out.println(list);
		
		// addAl
		ArrayList<String> list2 = new ArrayList<String>();
		list2.add("Apple");
		list2.add("Samsung");
		list.addAll(list2);
		System.out.println(list);
		
		// size
		System.out.println(list.size());
		
		// contains(params): ArrayList�� params�� �����ϰ� �ִ��� ����
		System.out.println(list.contains("Hyundai"));
		
		// get(index)
		System.out.println(list.get(1));
		
		// set(index, element): Ư���� ��ġ�� �ִ� ���� ��ü
		System.out.println(list.set(2, "Hyundai")); 
		System.out.println(list);
		
		// indexOf(params)
		System.out.println(list.indexOf("Google"));
		
		// isEmpty(): ArrayList ����ִ��� Ȯ��
		System.out.println(list.isEmpty());
		
		// remove(index)
		list.remove(3);
		System.out.println(list);
		
		// clear()
		list.clear();
		System.out.println(list);
		System.out.println(list.isEmpty());

	}

}
