package generic;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class Collection {

	public static void main(String[] args) {
		List<String> arrayList = new ArrayList<String>();
		// LinkedList
		List<String> linkedList = new LinkedList<String>();
		linkedList.add("A");
		linkedList.add("B");
		linkedList.add(1, "C");
		System.out.println(linkedList);
		
		// HashSet
		Set<String> hashSet = new HashSet<String>();
		hashSet.add("A");
		hashSet.add("B");
		hashSet.add("A");
		System.out.println(hashSet);
		
		// LinkedHashSet
		Set<String> linkedHashSet = new LinkedHashSet<>();
		linkedHashSet.add("C");
		linkedHashSet.add("B");
		linkedHashSet.add("A");
		System.out.println(linkedHashSet);
		
		// TreeSet
		Set<String> treeSet = new TreeSet<>();
		treeSet.add("B");
		treeSet.add("B");
		treeSet.add("B");
	}

}
