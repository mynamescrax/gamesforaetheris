// Typed DXGI texture formats with a direct WebGPU texture representation.
// Typeless resources require their view formats and are intentionally rejected here.
const formats = new Map([
  [2, 'rgba32float'], [3, 'rgba32uint'], [4, 'rgba32sint'],
  [10, 'rgba16float'], [12, 'rgba16uint'], [14, 'rgba16sint'],
  [16, 'rg32float'], [17, 'rg32uint'], [18, 'rg32sint'],
  [24, 'rgb10a2unorm'], [26, 'rg11b10ufloat'],
  [28, 'rgba8unorm'], [29, 'rgba8unorm-srgb'], [30, 'rgba8uint'], [31, 'rgba8snorm'], [32, 'rgba8sint'],
  [34, 'rg16float'], [36, 'rg16uint'], [38, 'rg16sint'],
  [40, 'depth32float'], [41, 'r32float'], [42, 'r32uint'], [43, 'r32sint'],
  [45, 'depth24plus-stencil8'],
  [49, 'rg8unorm'], [50, 'rg8uint'], [51, 'rg8snorm'], [52, 'rg8sint'],
  [54, 'r16float'], [57, 'r16uint'], [59, 'r16sint'],
  [61, 'r8unorm'], [62, 'r8uint'], [63, 'r8snorm'], [64, 'r8sint'],
  [87, 'bgra8unorm'], [91, 'bgra8unorm-srgb'],
  [71, 'bc1-rgba-unorm'], [72, 'bc1-rgba-unorm-srgb'],
  [74, 'bc2-rgba-unorm'], [75, 'bc2-rgba-unorm-srgb'],
  [77, 'bc3-rgba-unorm'], [78, 'bc3-rgba-unorm-srgb'],
  [80, 'bc4-r-unorm'], [81, 'bc4-r-snorm'],
  [83, 'bc5-rg-unorm'], [84, 'bc5-rg-snorm'],
  [95, 'bc6h-rgb-ufloat'], [96, 'bc6h-rgb-float'],
  [98, 'bc7-rgba-unorm'], [99, 'bc7-rgba-unorm-srgb'],
]);

export function dxgiWebGPUFormat(dxgi) {
  const format = formats.get(dxgi);
  if (!format) throw new Error(`DXGI texture format ${dxgi} needs a conversion or view-specific mapping`);
  return {
    format,
    requiredFeature: format.startsWith('bc') ? 'texture-compression-bc' : null,
    directUpload: dxgi !== 45,
  };
}
