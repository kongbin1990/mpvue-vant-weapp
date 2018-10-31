import { VantComponent } from '../common/component';
VantComponent({
  classes: ['title-class'],
  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    zIndex: {
      type: Number,
      value: 1
    }
  },
  methods: {
    onClickLeft: function onClickLeft() {
      this.$emit('clickLeft');
    },
    onClickRight: function onClickRight() {
      this.$emit('clickRight');
    }
  }
});
