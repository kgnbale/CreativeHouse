<template>
  <div class="c-footer">
    <div class="flex">
      <div class="left-footer-part">
        <div class="branch-list">
          <ul>
            <li>LSUX</li>
            <li>原创馆</li>
            <li>QQ Family</li>
            <li>Tencent</li>
          </ul>
        </div>
      </div>
      <div class="middle-footer-part">
        <ul>
          <li>新手指引</li>
          <li>推广变现</li>
          <li>服务协议</li>
          <li>关于我们</li>
        </ul>
      </div>
      <div class="right-footer-part">
        <ul class="share-methods">
          <li class="wechat">微信</li>
          <li class="qq-space">QQ空间</li>
          <li class="ins">Ins</li>
        </ul>
      </div>
    </div>
    <div class="copy-right">
      Copyright @ 1998 - 2020 Tencent Inc. All Rights Reserved
    </div>
  </div>
</template>
<script>
export default {
  name: 'c-footer'
}
</script>
<style lang="less" scoped>
li {
  list-style: none;
}
.c-footer {
  width: 100%;
  background: #000;
  padding: 60px 7.75rem 40px;
  box-sizing: border-box;
  .flex {
    display: flex;
    justify-content: space-between;
    align-content: center;
    .left-footer-part {
      flex-grow: 2;
      .branch-list {
        ul {
          width: 16.875rem;
          li {
            font-weight: bold;
            display: inline-block;
            width: 8rem;
            height: 3.75rem;
            line-height: 3.75rem;
            color: #fff;
            border: 1px solid hsla(0, 0%, 100%, 0.2);
            margin-bottom: 10px;
          }
        }
      }
    }
    .middle-footer-part {
      flex-grow: 1;
      ul {
        li {
          color: #fff;
          margin-bottom: 8px;
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
    .right-footer-part {
      flex-grow: 1;
      ul {
        li {
          color: #fff;
          margin-bottom: 8px;
        }
      }
    }
  }
  .copy-right{
    font-size:12px;
    color:#4E4E4E;
    text-align: left;
    margin-top:5rem;
  }
}
</style>
