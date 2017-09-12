// ==ORIGINAL==
class C {
    M1() { }
    M2() {
        return 1;
    }
    M3() { }
}
// ==SCOPE::class 'C'==
class C {
    M1() { }
    M2() {
        return this./*RENAME*/newFunction();
    }
    private newFunction() {
        return 1;
    }

    M3() { }
}
// ==SCOPE::global scope==
class C {
    M1() { }
    M2() {
        return /*RENAME*/newFunction();
    }
    M3() { }
}
function newFunction() {
    return 1;
}
