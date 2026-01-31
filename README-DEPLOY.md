# VISIQ Academy - 完全版ウェブサイト

## 📁 含まれるファイル

- **index.html** - メインページ（トップページ）
- **contact.html** - お問い合わせページ
- **privacy.html** - プライバシーポリシー
- **legal.html** - 特定商取引法に基づく表記

## 🚀 Vercelへの超簡単デプロイ

### 方法1: ドラッグ&ドロップ（最も簡単！）

1. **https://vercel.com** にアクセス
2. GitHubアカウントでサインアップ/ログイン
3. 「Add New...」→「Project」をクリック
4. すべてのHTMLファイルをドラッグ&ドロップ
5. 数秒でデプロイ完了！🎉

### 方法2: Vercel CLI

```bash
# HTMLファイルがあるフォルダで実行
npx vercel

# 本番環境にデプロイ
npx vercel --prod
```

## 📋 サイト構成

```
あなたのサイト/
├── index.html           # トップページ
├── contact.html         # お問い合わせフォーム
├── privacy.html         # プライバシーポリシー
└── legal.html           # 特定商取引法に基づく表記
```

## ✨ 実装済み機能

### メインページ (index.html)
- ✅ レスポンシブデザイン
- ✅ スムーズスクロールナビゲーション
- ✅ モバイルメニュー
- ✅ FAQアコーディオン
- ✅ アニメーション効果
- ✅ 各ページへのリンク

### お問い合わせページ (contact.html)
- ✅ フォームバリデーション
- ✅ お子様の学年選択
- ✅ お問い合わせ種別選択
- ✅ プライバシーポリシーへのリンク

### プライバシーポリシー (privacy.html)
- ✅ 11項目の詳細なポリシー
- ✅ 個人情報保護法準拠
- ✅ お問い合わせ窓口の明記

### 特定商取引法 (legal.html)
- ✅ 必要事項の完全記載
- ✅ キャンセル・返金規定
- ✅ サービス内容の明記

## 🎨 デザインの特徴

- **カラースキーム**: ブルー×オレンジのグラデーション
- **フォント**: Noto Sans JP + Plus Jakarta Sans
- **レスポンシブ**: モバイル・タブレット・デスクトップ完全対応
- **CDN利用**: Tailwind CSS（ビルド不要）

## 📝 カスタマイズ方法

### 連絡先情報を変更
各HTMLファイルの以下の部分を編集してください：

```html
<!-- メールアドレス -->
info@visiqacademy.com

<!-- 電話番号 -->
047-XXX-XXXX

<!-- 住所 -->
千葉県船橋市[住所詳細]
```

### 色を変更
各HTMLファイルの`<style>`タグ内を編集：

```css
.text-gradient {
    background: linear-gradient(135deg, #1e40af 0%, #f97316 100%);
}
```

### ロゴを追加
`<div class="w-10 h-10..."`の部分を画像に置き換え：

```html
<img src="logo.png" alt="VISIQ Academy" class="w-12 h-12">
```

## 🔧 注意事項

### フォーム送信について
現在、お問い合わせフォームは**デモ版**です。
実際に使用する場合は、以下のいずれかを実装してください：

1. **Formspree** (無料): https://formspree.io
2. **Netlify Forms** (無料): Netlifyにデプロイ時に自動有効化
3. **Google Apps Script**: Googleフォーム連携
4. **バックエンドAPI**: 独自のサーバー実装

### 画像の追加
画像を追加する場合は、HTMLファイルと同じフォルダに配置：

```
/
├── index.html
├── contact.html
├── images/
│   ├── logo.png
│   └── hero.jpg
```

## 💰 ホスティング料金

### Vercel（推奨）
- **無料プラン**で十分
- 独自ドメイン対応
- SSL証明書自動発行
- 月100GBまでの帯域幅

### その他の選択肢
- **Netlify**: 無料、類似サービス
- **GitHub Pages**: 無料、GitHubアカウント必要
- **Cloudflare Pages**: 無料、高速CDN

## 🌐 独自ドメインの設定

1. Vercelダッシュボードで「Settings」→「Domains」
2. ドメインを追加（例: visiqacademy.com）
3. DNSレコードを設定：
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
4. 数分でHTTPS対応完了！

## 📞 サポート

質問があれば、Claudeに聞いてください！

- Vercelドキュメント: https://vercel.com/docs
- Tailwind CSSドキュメント: https://tailwindcss.com/docs

---

**すぐにデプロイして、オンラインで公開できます！** 🚀
