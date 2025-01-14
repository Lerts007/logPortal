Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  el: "#app",
  data: () => ({
    headerSearch: false,

    modalFilter: false,
    modalFilterList: [
      {
        name: "Колонка",
        status: false,
      },
      {
        name: "Колонка",
        status: false,
      },
      {
        name: "Колонка",
        status: false,
      },
      {
        name: "Колонка",
        status: false,
      },
      {
        name: "Колонка",
        status: false,
      },
      {
        name: "Колонка",
        status: false,
      },
      {
        name: "Колонка",
        status: false,
      },
    ],

    modalShow: false,
    modalSide: true,
    itemModal: undefined,

    draggedColumn: null,
    draggedColumnIndex: null,
    resizeHandleMouse: false,

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

    dateTime: {
      first: null,
      second: null,
    },

    code: `<Contact DateChanged="31.10.2024 23:45:11" DateCreate="27.09.2023 18:57:29" deleted="false">
  <id_Contact>3117465</id_Contact>
  <id_Person>2647942</id_Person>
  <id_ContactType>3</id_ContactType>
  <Content>SV.TIKHONOV@SEVERSTAL.COM</Content>
  <ContactTypeName>Email</ContactTypeName>
</Contact>`,
  }),
  watch: {
    modalShow(newQuestion, oldQuestion) {
      if (newQuestion) {
        this.modalSide = true;
      }
    },
  },
  methods: {
    highlighter(code) {
      return Prism.highlight(code, Prism.languages.html, "html");
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

    openModal(item) {
      this.modalShow = true;
      this.itemModal = item;
    },

    selectRole(index) {
      const buttons = document.querySelectorAll(".btn-slider__btn");
      const slider = document.querySelector(".btn-slider__slider");

      buttons.forEach((btn) => btn.classList.remove("btn-slider__btn--active"));

      buttons[index].classList.add("btn-slider__btn--active");

      if (index) {
        slider.style.left = `calc(${index * 50}% )`;
        this.modalSide = false;
      } else {
        slider.style.left = `2px`;
        this.modalSide = true;
      }
    },

    // ТАБЛИЦА
    // закрепление
    pin(event) {
      const item = event.currentTarget;
      const th = item.closest("th");
      const span = th.querySelector(".tableC__icon-pin");
      const attach = th.querySelector(".dropdown__item--attach");
      const detach = th.querySelector(".dropdown__item--detach");
      const borderTh = document.querySelector(".tableC__fixed .tableC__border");
      const tableFixed = document.querySelector(".tableC__fixed");
      const tableScroll = document.querySelector(".tableC__scroll");

      const parentRow = th.parentElement;
      console.log(parentRow);

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

        attach.parentNode.style.display = "none";
        detach.parentNode.style.display = "flex";

        console.log(attach);
        console.log(detach);

        columnToMove.draggable = false;

        arraytableFixed[borderIndex - 1].classList.toggle("tableC__column--no-border");
        columnToMove.classList.toggle("tableC__column--no-border");

        tableFixed.querySelector("thead tr").insertBefore(columnToMove, borderTh);

        rowsScroll.forEach((row, index) => {
          const cells = Array.from(row.children);
          const cellToMove = cells[thIndex];

          if (cellToMove && rowsFixed[index]) {
            const borderCell = rowsFixed[index].children[borderIndex];

            console.log(borderCell);

            rowsFixed[index].insertBefore(cellToMove, borderCell);
          }
        });

        span.classList.toggle("tableC__icon-pin--disabled");
      } else if (currentTable === tableFixed) {
        const rowsFixed = tableFixed.querySelectorAll("tbody tr");
        const rowsScroll = tableScroll.querySelectorAll("tbody tr");

        const columnToMove = th;

        attach.parentNode.style.display = "flex";
        detach.parentNode.style.display = "none";

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

      console.log(tableFixed.closest(".log"));
      if (tableFixed.querySelectorAll("th").length === 2) {
        console.log(tableFixed.querySelectorAll("th").length === 2);
        tableFixed.closest(".log").classList.add("tableC__no-border");
      } else {
        tableFixed.closest(".log").classList.remove("tableC__no-border");
      }
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
        const minWidth = 130;

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

    window.onload = () => {
      const container = document.querySelector(".containerС");
      const blockScroll = document.querySelector(".tableC__block-scroll");
      const tableFixed = document.querySelector(".tableC__fixed");

      console.log(blockScroll);

      blockScroll.style.width = `
          ${
            (window.innerWidth - container.offsetWidth) / 2 +
            (container.offsetWidth - tableFixed.offsetWidth) -
            24
          }px`;
    };

    mobiscroll.setOptions({
      locale: mobiscroll.localeRu,
      theme: "material",
      themeVariant: "light",
    });

    const prev = mobiscroll.datepicker("#prev", {
      controls: ["date", "time"],
      dateFormat: "D MMM.,",
      timeFormat: "HH:mm",
      dateWheels: "D MMM",
      display: "center",
      touchUi: true,
      headerText: `${new Date(this.dateTime.first).getFullYear()}`,
      onInit: (event, inst) => {
        this.dateTime.first = new Date();
        inst.setOptions({
          headerText: `${new Date(this.dateTime.first).getFullYear()}`,
          max: this.dateTime.second,
        });
      },
      onChange: (event, inst) => {
        this.dateTime.first = event.value;
        console.log(event.headerText);
        inst.setOptions({
          headerText: `${new Date(this.dateTime.first).getFullYear()}`,
          max: this.dateTime.second,
        });
      },

      max: this.dateTime.second,
    });

    // this.dateTime.first = prev.getVal();
    // console.log(prev.headerText);

    const next = mobiscroll.datepicker("#next", {
      controls: ["date", "time"],
      dateFormat: "D MMM.,",
      timeFormat: "HH:mm",
      dateWheels: "D MMM",
      display: "center",
      touchUi: true,
      headerText: `${new Date(this.dateTime.second).getFullYear()}`,
      onInit: (event, inst) => {
        this.dateTime.second = new Date();
        inst.setOptions({
          headerText: `${new Date(this.dateTime.second).getFullYear()}`,
          min: this.dateTime.first,
        });
      },
      onChange: (event, inst) => {
        this.dateTime.second = event.value;
        inst.setOptions({
          headerText: `${new Date(this.dateTime.second).getFullYear()}`,
          min: this.dateTime.first,
        });
      },

      min: this.dateTime.first,
    });

    console.log(prev.headerText);
  },
});
