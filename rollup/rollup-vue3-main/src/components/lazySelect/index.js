import { defineComponent } from "vue";

import "./index.less";

export default defineComponent({
  name: "IFunLazySelect",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectValue: "",
      showList: false,
    };
  },
  mounted() {
    //
  },
  methods: {
    handleClickItem(info) {
      //
      console.log(info);
      this.selectValue = info.label;
      this.showList = false;
    },
  },
  render() {
    return (
      <div class="lazy-select">
        <input
          class="select-input"
          placeholder="请选择"
          value={this.selectValue}
          onFocus={() => (this.showList = true)}
        />
        <div class="dropdown-list" v-show={this.showList}>
          <ul>
            {this.data.map((item) => (
              <li
                key={item.value}
                onClick={() => this.handleClickItem(item)}
                class="dropdown-list-item"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
});
