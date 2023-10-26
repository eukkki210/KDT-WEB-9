package generic;

class Box<T extends Number> {
	private T item;
	
	public void setItem (T item) {
		this.item = item;
	}
	
	public T getItem() {
		return item;
	}
}

interface Movable {
	void move();
}

class Car implements Movable {
	@Override
	public void move() {
		System.out.println("자동차 출발");
	}
}

// 제네릭 클래스
class Container<T extends Movable> {
	private T item;
	
	public Container(T item) {
		this.item = item; 
	}
	
	public void makeItMove() {
		item.move();
	}
}
public class GenericExample2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Box<String> stringBox = new Box<>();
//		stringBox.setItem("Hello World");
//		String value = stringBox.getItem();
//		System.out.println(value);
		
		Box<Double> doubleBox = new Box<>();
		Box<Short> shortBox = new Box<>();
	}

}
