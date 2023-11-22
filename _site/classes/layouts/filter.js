class Filter {
  constructor(data, vizLayout) {
    this.id = data.id + '_' + vizLayout.id;
    this.vizLayout = vizLayout;

    if (data.type === "select") {
      this.filterWij = new WijSelect(this.id + '_filter', data.options.map(item => ({
        value: item.value,
        label: item.label
      })), data.selected, data.hidden, data.text, this.vizLayout, this);
    } else if (data.type === "radio") {
      this.filterWij = new WijRadio(this.id + '_filter', data.options.map(item => ({
        value: item.value,
        label: item.label
      })), data.selected, data.hidden, '', this.vizLayout, this);
    } else if (data.type === "checkbox") {
        // Handle checkbox case if needed
    } else if (data.type === "combobox") {
      this.filterWij = new WijComboboxes(this.id + '_filter', data.options.map(item => ({
        value: item.value,
        label: item.label
      })), data.selected, data.selected, data.hidden, '', this.vizLayout, this);    }
  }

  render() {
    return this.filterWij.render();
  }

  getOptionsAsList() {
    return this.filterWij.options.map(option => option.value);
  }

}