uniform vec3 color;

void main(void){
   gl_FragColor = vec4(color.r, color.g, color.b, 1.0);
}