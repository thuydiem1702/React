import axios from 'axios'

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/students');
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const save = async (student) => {
    try {
        await axios.post('http://localhost:8080/students', { ...student });
    } catch (error) {
        console.log(error);
    }
}

export const update = async (student) => {
    try {
        await axios.put('http://localhost:8080/students/' + student.id, { ...student });
    } catch (error) {
        console.log(error);
    }
}

export const findById = async (id) => {
    try {
        const result = await axios.get('http://localhost:8080/students/' + id);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteById = async (id) => {
    try {
        await axios.delete('http://localhost:8080/students/' + id);
    } catch (error) {
        console.log(error);
    }
}
