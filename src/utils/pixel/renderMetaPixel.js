const renderMetaPixel = () => {
  const scripts = [];
  scripts.push(
    <script key="function" id="facebook-pixel-script">
      {`YOUR_FUNCTION`}
    </script>
  );
  scripts.push(
    <noscript
      key="image"
      id="facebook-pixel-image"
    >{`https://www.facebook.com/tr?id=298652909890278&ev=PageView&noscript=1`}</noscript>
  );

  return scripts;
};
