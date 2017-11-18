precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 color;

void main(void) {
  vec4 c = vec4(color.r, color.g, color.b, 1.0);
  vec4 txtC = texture2D(uSampler, vTextureCoord);
  gl_FragColor = txtC * c;
}