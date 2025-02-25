fn main() {
    let mut foo: i32 = 5;
    let unsigned_foo: u32 = 10;

    println!("Hello, world! foo: {} unsigned_foo: {}", foo, unsigned_foo);

    foo = 7;
    println!("Hello, world! foo: {} unsigned_foo: {}", foo, unsigned_foo);

    foobar(5);


    let x = 6;
    match x {
        1 => println!("one"),
        2 | 3 | 4 | 5 => println!("2 | 3 | 4 | 5"),
        _ => println!("Anything else"),
    }

}

fn foobar(param : i8){
    println!("{}", param);
}