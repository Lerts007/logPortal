Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  el: "#app",
  data: () => ({
    dropdownItemsCountLog: ["10 000", "20 000", "30 000", "40 000", "99 999"], // Опции countLog
    dropdownItemsFilteType: ["Все", "Normal", "Error", "Warning"], // Опции type
    dropdownItemsCartTime: ["За последние сутки", "За последние час"], // Опции время графика

    selectedItem: "10 000", // Начальное значение countLog
    selectedItemFilteType: "Все", // Начальное значение type
    selectedItemChratTime: "За последние сутки",

    modalShow: false,
    itemModal: undefined,

    collapse: true,

    draggedColumn: null,
    draggedColumnIndex: null,
    resizeHandleMouse: false,

    dateTime: {
      first: ["2024-12-16", "22:46:18"],
      second: ["2024-12-17", "22:46:18"],
    },

    eventLog: [
      {
        status: "activ",
        date: "14 ноя, 12:30:56",
        message: "ТАЙМЕР CallbackTimerAction",
        email: "v.chepurnoy@skylane.com",
        badge: "Агент",
        site: "https://prd.sso.corteos.ru",
        session: "ENFG2ODHWLBW",
        id: "3117465",
        class: "ImapIdleHelper.cs",
        source: "imap-monitor",
        ipClient: "212.233.132.22",
      },
      {
        status: "warning",
        date: "14 ноя, 12:30:56",
        message: "ТАЙМЕР CallbackTimerAction",
        email: "v.chepurnoy@skylane.com",
        badge: "Клиент",
        site: "https://prd.sso.corteos.ru",
        session: "ENFG2ODHWLBW",
        id: "3117465",
        class: "ImapIdleHelper.cs",
        source: "imap-monitor",
        ipClient: "212.233.132.22",
      },
      {
        status: "error",
        date: "14 ноя, 12:30:56",
        message: "ТАЙМЕР CallbackTimerAction",
        email: "v.chepurnoy@skylane.com",
        badge: "Агент",
        site: "https://prd.sso.corteos.ru",
        session: "ENFG2ODHWLBW",
        id: "3117465",
        class: "ImapIdleHelper.cs",
        source: "imap-monitor",
        ipClient: "212.233.132.22",
      },
      {
        status: "activ",
        date: "14 ноя, 12:30:56",
        message: "ТАЙМЕР CallbackTimerAction",
        email: "v.chepurnoy@skylane.com",
        badge: "Агент",
        site: "https://prd.sso.corteos.ru",
        session: "ENFG2ODHWLBW",
        id: "3117465",
        class: "ImapIdleHelper.cs",
        source: "imap-monitor",
        ipClient: "212.233.132.22",
      },
      {
        status: "activ",
        date: "14 ноя, 12:30:56",
        message: "ТАЙМЕР CallbackTimerAction",
        email: "v.chepurnoy@skylane.com",
        badge: "Агент",
        site: "https://prd.sso.corteos.ru",
        session: "ENFG2ODHWLBW",
        id: "3117465",
        class: "ImapIdleHelper.cs",
        source: "imap-monitor",
        ipClient: "212.233.132.22",
      },
      {
        status: "activ",
        date: "14 ноя, 12:30:56",
        message: "ТАЙМЕР CallbackTimerAction",
        email: "v.chepurnoy@skylane.com",
        badge: "Агент",
        site: "https://prd.sso.corteos.ru",
        session: "ENFG2ODHWLBW",
        id: "3117465",
        class: "ImapIdleHelper.cs",
        source: "imap-monitor",
        ipClient: "212.233.132.22",
      },
      {
        status: "activ",
        date: "14 ноя, 12:30:56",
        message: "ТАЙМЕР CallbackTimerAction",
        email: "v.chepurnoy@skylane.com",
        badge: "Агент",
        site: "https://prd.sso.corteos.ru",
        session: "ENFG2ODHWLBW",
        id: "3117465",
        class: "ImapIdleHelper.cs",
        source: "imap-monitor",
        ipClient: "212.233.132.22",
      },
      {
        status: "activ",
        date: "14 ноя, 12:30:56",
        message: "ТАЙМЕР CallbackTimerAction",
        email: "v.chepurnoy@skylane.com",
        badge: "Агент",
        site: "https://prd.sso.corteos.ru",
        session: "ENFG2ODHWLBW",
        id: "3117465",
        class: "ImapIdleHelper.cs",
        source: "imap-monitor",
        ipClient: "212.233.132.22",
      },
      {
        status: "activ",
        date: "14 ноя, 12:30:56",
        message: "ТАЙМЕР CallbackTimerAction",
        email: "v.chepurnoy@skylane.com",
        badge: "Агент",
        site: "https://prd.sso.corteos.ru",
        session: "ENFG2ODHWLBW",
        id: "3117465",
        class: "ImapIdleHelper.cs",
        source: "imap-monitor",
        ipClient: "212.233.132.22",
      },
      {
        status: "activ",
        date: "14 ноя, 12:30:56",
        message: "ТАЙМЕР CallbackTimerAction",
        email: "v.chepurnoy@skylane.com",
        badge: "Агент",
        site: "https://prd.sso.corteos.ru",
        session: "ENFG2ODHWLBW",
        id: "3117465",
        class: "ImapIdleHelper.cs",
        source: "imap-monitor",
        ipClient: "212.233.132.22",
      },
    ],

    chart: null,

    options: {
      animation: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
          },
        },
        y: {
          stacked: true,
          title: {
            display: true,
          },
          beginAtZero: true,
        },
      },
    },

    code: `<Contact DateChanged="31.10.2024 23:45:11" DateCreate="27.09.2023 18:57:29" deleted="false">
  <id_Contact>3117465</id_Contact>
  <id_Person>2647942</id_Person>
  <id_ContactType>3</id_ContactType>
  <Content>SV.TIKHONOV@SEVERSTAL.COM</Content>
  <ContactTypeName>Email</ContactTypeName>
</Contact>`,
  }),
  methods: {
    selectItem(item) {
      this.selectedItem = item; // Устанавливаем выбранный элемент в countLog
    },
    selectItem__filteType(item) {
      this.selectedItemFilteType = item; // Устанавливаем выбранный элемент в type
    },
    selectItemChartTime(item, event) {
      this.selectedItemChratTime = item; // Устанавливаем выбранный элемент в chart time
    },
    highlighter(code) {
      return Prism.highlight(code, Prism.languages.html, "html");
    },

    openModal(item) {
      this.modalShow = true;
      this.itemModal = item;
    },

    disableScroll() {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.paddingRight = `${scrollBarWidth}px`; // Добавляем отступ
    },
    enableScroll() {
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = ""; // Убираем отступ
    },

    renderChart() {
      const ctx = document.getElementById("collapseC__logChart").getContext("2d");

      // data можно потом вынести в отдельную переменую, сейчас сделано для генерации рандомных значений
      const data = {
        labels: this.generateLabels(),
        datasets: [
          {
            label: "Warning",
            data: this.generateRandomData(48, 5, 20),
            backgroundColor: "rgb(255, 173, 14)",
          },
          {
            label: "Active",
            data: this.generateRandomData(48, 10, 30),
            backgroundColor: "rgb(15, 144, 233)",
          },
          {
            label: "Error",
            data: this.generateRandomData(48, 1, 10),
            backgroundColor: "rgb(255, 73, 88)",
          },
        ],
      };

      // const options = this.options;
      const options = {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            stacked: true,
            title: {
              display: true,
            },
            ticks: {
              maxRotation: 0,
              minRotation: 0,
              autoSkip: true,
            },
          },
          y: {
            stacked: true,
            title: {
              display: true,
            },
            beginAtZero: true,
          },
        },
      };

      // Создание графика
      this.chart = new Chart(ctx, {
        type: "bar",
        data,
        options,
      });
    },

    // удалить. Нужно только для рандомной генерации
    generateLabels() {
      const labels = [];
      let currentDate = new Date();
      currentDate.setHours(currentDate.getHours() - 24);

      for (let i = 0; i < 24; i++) {
        labels.push(currentDate.toISOString().slice(10, 16).replace("T", " "));
        currentDate.setHours(currentDate.getHours() + 1);
      }

      return labels;
    },

    // удалить. Нужно только для рандомной генерации
    generateRandomData(count, min, max) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
      return data;
    },

    // ТАБЛИЦА
    // закрепление
    pin(item) {
      const th = item.target.closest("th");
      const span = item.target.closest("span");
      const borderTh = document.querySelector(".tableC__fixed .tableC__border");
      const tableFixed = document.querySelector(".tableC__fixed");
      const tableScroll = document.querySelector(".tableC__scroll");

      if (!tableFixed || !tableScroll) {
        console.error("Таблицы не найдены. Проверьте классы.");
        return;
      }

      const parentRow = th.parentElement;

      const arrayParentRow = Array.from(parentRow.children);

      const arraytableFixed = Array.from(tableFixed.querySelectorAll("th"));

      const thIndex = arrayParentRow.indexOf(th);
      const borderIndex = arraytableFixed.indexOf(borderTh);
      console.log(arraytableFixed);

      const currentTable = th.closest("table");

      if (currentTable === tableScroll) {
        const rowsScroll = tableScroll.querySelectorAll("tbody tr");
        const rowsFixed = tableFixed.querySelectorAll("tbody tr");

        const columnToMove = th;

        columnToMove.draggable = false;

        arraytableFixed[borderIndex - 1].classList.toggle("tableC__column--no-border");
        columnToMove.classList.toggle("tableC__column--no-border");

        tableFixed.querySelector("thead tr").insertBefore(columnToMove, borderTh);

        rowsScroll.forEach((row, index) => {
          const cells = Array.from(row.children);
          const cellToMove = cells[thIndex];

          if (cellToMove && rowsFixed[index]) {
            const borderCell = rowsFixed[index].children[borderIndex];

            rowsFixed[index].insertBefore(cellToMove, borderCell);
          }
        });

        span.classList.toggle("tableC__icon-pin--disabled");
      } else if (currentTable === tableFixed) {
        const rowsFixed = tableFixed.querySelectorAll("tbody tr");
        const rowsScroll = tableScroll.querySelectorAll("tbody tr");

        const columnToMove = th;

        columnToMove.draggable = true;

        arraytableFixed[borderIndex - 2].classList.toggle("tableC__column--no-border");
        columnToMove.classList.toggle("tableC__column--no-border");

        tableScroll
          .querySelector("thead tr")
          .insertBefore(columnToMove, tableScroll.querySelector("thead tr").firstChild);

        rowsFixed.forEach((row, index) => {
          const cells = Array.from(row.children);
          const cellToMove = cells[thIndex];

          if (cellToMove && rowsScroll[index]) {
            rowsScroll[index].insertBefore(cellToMove, rowsScroll[index].firstChild);
          }
        });

        span.classList.toggle("tableC__icon-pin--disabled");
      }

      const container = document.querySelector(".containerС");
      const blockScroll = document.querySelector(".tableC__block-scroll");

      blockScroll.style.width = `
                ${
                  (window.innerWidth - container.offsetWidth) / 2 +
                  (container.offsetWidth - tableFixed.offsetWidth) -
                  24
                }px`;
      // blockScroll.style.paddingRight = `
      //     ${(window.innerWidth - container.offsetWidth + 17) / 2}px`;
    },

    // darg and drop
    drag(event) {
      const column = event.target.closest("th");

      if (column && !this.resizeHandleMouse) {
        this.draggedColumn = column;
        this.draggedColumnIndex = Array.from(column.parentNode.children).indexOf(column);
        column.classList.add("dragging");
      } else {
        event.preventDefault();
      }
    },

    allowDrop(event) {
      event.preventDefault();
    },

    drop(event) {
      event.preventDefault();

      const target = event.target.closest("th");

      if (
        this.draggedColumn &&
        target &&
        target !== this.draggedColumn &&
        target.closest(".tableC").classList.contains("tableC__scroll")
      ) {
        const table = document.querySelector(".tableC__scroll");
        const headerRow = table.querySelector("thead tr");

        const targetIndex = Array.from(headerRow.children).indexOf(target);
        const draggedIndex = Array.from(headerRow.children).indexOf(this.draggedColumn);

        if (targetIndex < draggedIndex) {
          headerRow.insertBefore(this.draggedColumn, target);
        } else {
          headerRow.insertBefore(this.draggedColumn, target.nextSibling);
        }

        const rows = table.querySelectorAll("tbody tr");

        rows.forEach((row) => {
          const cells = Array.from(row.children);
          const draggedCell = cells[draggedIndex];
          const targetCell = cells[targetIndex];

          if (draggedCell) {
            if (targetIndex < draggedIndex) {
              row.insertBefore(draggedCell, targetCell);
            } else {
              row.insertBefore(draggedCell, targetCell.nextSibling);
            }
          }
        });

        this.draggedColumn.classList.remove("dragging");
        this.draggedColumn = null;
        this.draggedColumnIndex = null;
      }
    },

    startResize(event, th) {
      const tableScroll = document.querySelector(".tableC__scroll");
      this.resizeHandleMouse = true;
      let startX = event.pageX;
      let startWidth = th.offsetWidth;
      let startWidthTable = tableScroll.offsetWidth;
      let newTableWidth;

      const mouseMove = (e) => {
        const newWidth = startWidth + (e.pageX - startX);

        if (th.closest(".tableC__scroll")) {
          newTableWidth = startWidthTable + e.pageX - startX;
        }
        const minWidth = 60;

        if (newWidth > minWidth) {
          if (th.closest(".tableC__scroll")) {
            tableScroll.style.width = `${newTableWidth}px`;
          }
          th.style.width = `${newWidth}px`;
        }
      };

      const mouseUp = () => {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
        this.resizeHandleMouse = false;
      };

      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);

      event.stopPropagation();
    },
  },
  mounted() {
    this.$root.$on("bv::dropdown::show", (bvEvent) => {
      if (this.collapse) {
        console.log(bvEvent);

        this.$refs.dropdownIcon.hide();
      }
    });

    this.$nextTick(() => {
      document.querySelectorAll("th").forEach((th) => {
        th.addEventListener("dragstart", this.drag);
        th.addEventListener("dragover", this.allowDrop);
        th.addEventListener("drop", this.drop);

        th.querySelectorAll(".resize-handle").forEach((handle) => {
          handle.addEventListener("mousedown", (e) => this.startResize(e, th));
        });
      });
    });

    const tableCScrollLine = document.querySelectorAll(".tableC__scroll .tableC__line");

    const tableCFixedLine = document.querySelectorAll(".tableC__fixed .tableC__line");

    this.renderChart();

    // выделение строк таблицы
    tableCScrollLine.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const index = Array.from(tableCScrollLine).indexOf(item);

        tableCFixedLine[index].classList.add("tableC__line--hover");
      });

      item.addEventListener("mouseleave", () => {
        const index = Array.from(tableCScrollLine).indexOf(item);

        tableCFixedLine[index].classList.remove("tableC__line--hover");
      });
    });

    // выделение строк таблицы
    tableCFixedLine.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const index = Array.from(tableCFixedLine).indexOf(item);

        tableCScrollLine[index].classList.add("tableC__line--hover");
      });

      item.addEventListener("mouseleave", () => {
        const index = Array.from(tableCFixedLine).indexOf(item);

        tableCScrollLine[index].classList.remove("tableC__line--hover");
      });
    });

    // установка значений для блока datetime
    const today = new Date();
    today.setDate(today.getDate() - 1);

    this.$set(this.dateTime.first, 0, today.toLocaleDateString("ru-RU"));
    console.log(today.toLocaleDateString("ru-RU"));
    console.log(today.toLocaleTimeString("ru-RU"));

    this.$set(this.dateTime.second, 0, new Date().toLocaleDateString("ru-RU"));
    this.$set(this.dateTime.first, 1, new Date().toLocaleTimeString("ru-RU"));
    this.$set(this.dateTime.second, 1, new Date().toLocaleTimeString("ru-RU"));

    console.log(this.dateTime);

    window.onload = () => {
      const container = document.querySelector(".log");
      const blockScroll = document.querySelector(".tableC__block-scroll");
      const tableFixed = document.querySelector(".tableC__fixed");

      console.log(container.offsetWidth);

      blockScroll.style.width = `
          ${container.offsetWidth - tableFixed.offsetWidth}px`;
    };
  },
});
