// 1. set default value = fullName = "unknown", age = 25, isMale = false,
const Person = (fullName = "unknown", age = 25, isMale = false, avatar) => {
    // ternary operator, menggantikan if-else
    let sex = isMale ? "Laki-laki" : "Perempuan"
    const info = () => {
        // 2. Tampilkan full name, sex dan age
        return `Full Name: ${fullName}, Sex: ${isMale ? 'His' : 'Her'}, Age: ${age} years`
    };

    return {
        get getInfo() {
            // 3. kembalikan nilai info diatas
            return info();
        },
        toString() {
            // 4. kembalikan nilai info diatas
            return info();
        },
        addAge: (years) => {
            age += years; // 5. Kembalikan usia sekarang ditambah dengan tahun inputan user
        },
        setAge: (newAge) => {
            age = newAge; // 6. fungsi yang mengeset usia yang baru
        },
        rename: (newName) => {
            fullName = newName; // 6. fungsi yang mengeset nama yang baru
        },
        // 8. Kembalikan semua nilai dengan shorthand property
        fullName,
        age,
        isMale,
        avatar
    };
};

// 9. Export objek person sebagai sebuah modul
export default Person;