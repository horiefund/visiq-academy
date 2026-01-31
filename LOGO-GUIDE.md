# ロゴ画像の使用方法

## 📸 含まれるファイル

**logo.png** - VISIQ Academyの公式アイコン（虹色グラデーション）

---

## 🎨 更新内容

すべてのHTMLファイルのカラースキームを、ロゴアイコンに合わせて虹色グラデーションに変更しました！

### 変更されたカラー

**旧カラー:**
- 青 → オレンジのグラデーション

**新カラー:**
- シアン → 緑 → 黄色 → オレンジ → ピンク → 紫のグラデーション

---

## 🔧 ロゴ画像をサイトに表示する方法

現在、各ページのロゴはSVGアイコン（星マーク）になっています。
これを実際のVISIQロゴ画像に変更する方法：

### 方法1: 簡単な置き換え

各HTMLファイルで以下の部分を探してください：

```html
<div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-yellow-400 to-pink-500 flex items-center justify-center">
    <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
    </svg>
</div>
```

これを以下に置き換えます：

```html
<img src="logo.png" alt="VISIQ Academy" class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl">
```

### 方法2: 背景なしバージョン

```html
<img src="logo.png" alt="VISIQ Academy" class="w-10 h-10 sm:w-12 sm:h-12">
```

---

## 📁 ファイル配置

ロゴ画像 `logo.png` を、HTMLファイルと同じフォルダに配置してください：

```
あなたのサイト/
├── index.html
├── trial.html
├── contact.html
├── privacy.html
├── legal.html
└── logo.png  ← ここに配置
```

---

## 🎨 更新されたカラーパレット

### プライマリカラー
- **シアン**: #00B8D4
- **グリーン**: #00C853
- **イエロー**: #FFD600
- **オレンジ**: #FF6D00
- **ピンク**: #E91E63
- **パープル**: #7C4DFF

### Tailwind CSSクラス
- テキスト: `text-cyan-500`
- 背景: `bg-cyan-100`, `bg-cyan-50`
- ホバー: `hover:text-cyan-500`
- ボーダー: `border-cyan-500`
- グラデーション: `from-cyan-400 via-yellow-400 to-pink-500`

---

## ✨ グラデーションの使用例

### カスタムグラデーション

```css
background: linear-gradient(135deg, 
    #00B8D4 0%,   /* シアン */
    #00C853 20%,  /* グリーン */
    #FFD600 40%,  /* イエロー */
    #FF6D00 60%,  /* オレンジ */
    #E91E63 80%,  /* ピンク */
    #7C4DFF 100%  /* パープル */
);
```

このグラデーションは、すべてのページの以下の要素に適用されています：
- ヒーローセクションの背景
- テキストグラデーション（見出しなど）
- ボタン
- ロゴ背景

---

## 🔄 すべてのページで更新された要素

### index.html
✅ ヒーローセクション
✅ テキストグラデーション
✅ CTAボタン
✅ ナビゲーションボタン
✅ ロゴ背景
✅ ホバーカラー

### trial.html
✅ 同上

### contact.html
✅ 同上

### privacy.html
✅ 同上

### legal.html
✅ 同上

---

## 📸 Faviconの設定（オプション）

ブラウザのタブにロゴを表示したい場合：

1. `logo.png` を 16x16, 32x32, 48x48 のサイズに変換
2. 各HTMLファイルの `<head>` タグ内に追加：

```html
<link rel="icon" type="image/png" sizes="32x32" href="logo.png">
```

---

## 🎯 次のステップ

1. ✅ **logo.png を確認**
2. ✅ **HTMLファイルと同じフォルダに配置**
3. ✅ **ロゴをSVGから画像に置き換え**（オプション）
4. ✅ **Vercelにデプロイ**

---

## 💡 ヒント

- ロゴは透過PNG形式なので、どんな背景にも合います
- サイズは自由に調整可能（CSSで制御）
- Retina対応のため、2倍サイズの画像を用意するのもおすすめ

---

すべてのページが虹色グラデーションに統一されました！🌈✨
