fn main() {
    let mut foo: i32 = 5;
    let unsigned_foo: u32 = 10;

    println!("Hello, world! foo: {} unsigned_foo: {}", foo, unsigned_foo);

    foo = 7;
    println!("Hello, world! foo: {} unsigned_foo: {}", foo, unsigned_foo);

    foobar(5);

}

fn foobar(param : i8){
    println!("{}", param);
}