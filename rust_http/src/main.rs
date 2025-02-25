fn main() {
    let mut foo: i32 = 5;
    let unsigned_foo: u32 = 10;

    println!("Hello, world! foo: {} unsigned_foo: {}", foo, unsigned_foo);

    foo = 7;
    println!("Hello, world! foo: {} unsigned_foo: {}", foo, unsigned_foo);

    let z = foobar();

    println!("z is {}", z)
}

fn foobar() -> i32{
    println!("Function");
    return 5;
}