const newTaskInput = document.getElementById('newTask');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Tambahkan tombol centang
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Selesai';
        completeButton.classList.add('completeButton');

        // Tambahkan tombol hapus
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.classList.add('deleteButton');

        // Tambahkan event listener untuk tombol centang
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Tambahkan event listener untuk tombol hapus
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        // Tambahkan tombol ke item tugas
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        // Tambahkan item tugas ke daftar
        taskList.appendChild(taskItem);

        // Kosongkan input
        newTaskInput.value = '';
    }
});
