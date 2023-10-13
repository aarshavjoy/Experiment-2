import React from 'react'
import sound from '../Assets/audio/beep.mp3'

const VoterMachine = () => {

  const audio = new Audio(sound);

  const onHandleTestClick = () => {
 document.getElementById('testLight').style.fill='green';
 audio.play();
  }

  return (
    <svg width="400" height="500" viewBox="0 0 611 992" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M584.837 4H26.2958C13.9822 4 4 13.9822 4 26.2958V965.995C4 978.308 13.9822 988.291 26.2958 988.291H584.837C597.151 988.291 607.133 978.308 607.133 965.995V26.2958C607.133 13.9822 597.151 4 584.837 4Z" fill="#E8EDE9" stroke="#B6B6B6" stroke-width="6.18278"/>
    <path d="M359.921 67.6481H29.0002C15.1992 67.6481 4.01123 78.836 4.01123 92.637V960.824C4.01123 974.625 15.1992 985.813 29.0002 985.813H359.921C373.722 985.813 384.91 974.625 384.91 960.824V92.637C384.91 78.836 373.722 67.6481 359.921 67.6481Z" stroke="#B6B6B6" stroke-width="6.28681"/>
    <path id='testLight' d="M211.309 53.4153C217.94 53.4153 223.316 48.474 223.316 42.3787C223.316 36.2833 217.94 31.342 211.309 31.342C204.678 31.342 199.302 36.2833 199.302 42.3787C199.302 48.474 204.678 53.4153 211.309 53.4153Z" fill="#064D5A"/>
    <path d="M140.497 46.0924V33.9816H144.589C145.536 33.9816 146.312 34.1433 146.919 34.4665C147.526 34.7858 147.976 35.2254 148.268 35.7852C148.559 36.345 148.705 36.9817 148.705 37.6953C148.705 38.4088 148.559 39.0416 148.268 39.5935C147.976 40.1454 147.528 40.5791 146.925 40.8945C146.322 41.2059 145.551 41.3616 144.613 41.3616H141.302V40.037H144.566C145.212 40.037 145.733 39.9424 146.127 39.7532C146.525 39.5639 146.813 39.2959 146.99 38.9489C147.172 38.5981 147.262 38.1802 147.262 37.6953C147.262 37.2104 147.172 36.7866 146.99 36.4239C146.809 36.0612 146.519 35.7813 146.121 35.5842C145.723 35.3831 145.197 35.2826 144.542 35.2826H141.964V46.0924H140.497ZM146.198 40.652L149.178 46.0924H147.475L144.542 40.652H146.198ZM154.67 46.2816C153.795 46.2816 153.04 46.0885 152.406 45.7021C151.775 45.3118 151.288 44.7678 150.945 44.07C150.606 43.3683 150.436 42.5522 150.436 41.6218C150.436 40.6914 150.606 39.8714 150.945 39.1618C151.288 38.4483 151.765 37.8924 152.376 37.4942C152.991 37.0921 153.708 36.891 154.528 36.891C155.002 36.891 155.469 36.9699 155.93 37.1276C156.391 37.2853 156.811 37.5415 157.19 37.8963C157.568 38.2472 157.87 38.7124 158.094 39.2919C158.319 39.8714 158.431 40.585 158.431 41.4326V42.0239H151.43V40.8176H157.012C157.012 40.3051 156.91 39.8478 156.705 39.4457C156.504 39.0435 156.216 38.7262 155.841 38.4936C155.471 38.261 155.033 38.1447 154.528 38.1447C153.973 38.1447 153.492 38.2827 153.086 38.5586C152.683 38.8307 152.374 39.1855 152.157 39.6231C151.94 40.0607 151.832 40.5298 151.832 41.0305V41.8347C151.832 42.5207 151.95 43.1022 152.187 43.5792C152.427 44.0523 152.76 44.413 153.186 44.6613C153.612 44.9058 154.107 45.028 154.67 45.028C155.037 45.028 155.368 44.9767 155.664 44.8742C155.963 44.7678 156.222 44.6101 156.439 44.4012C156.655 44.1883 156.823 43.9241 156.941 43.6087L158.289 43.9872C158.148 44.4445 157.909 44.8466 157.574 45.1936C157.239 45.5365 156.825 45.8046 156.332 45.9978C155.839 46.187 155.285 46.2816 154.67 46.2816ZM163.227 46.3053C162.652 46.3053 162.129 46.1969 161.66 45.9801C161.191 45.7593 160.818 45.4419 160.542 45.028C160.267 44.6101 160.129 44.1055 160.129 43.5141C160.129 42.9937 160.231 42.5719 160.436 42.2487C160.641 41.9214 160.915 41.6652 161.258 41.4799C161.601 41.2946 161.979 41.1566 162.393 41.066C162.811 40.9713 163.231 40.8964 163.653 40.8412C164.205 40.7703 164.652 40.7171 164.995 40.6816C165.342 40.6422 165.595 40.5771 165.752 40.4864C165.914 40.3958 165.995 40.2381 165.995 40.0134V39.9661C165.995 39.3826 165.835 38.9292 165.516 38.606C165.2 38.2827 164.721 38.121 164.079 38.121C163.412 38.121 162.89 38.2669 162.512 38.5586C162.133 38.8504 161.867 39.1618 161.713 39.493L160.389 39.0199C160.625 38.468 160.941 38.0383 161.335 37.7308C161.733 37.4193 162.167 37.2025 162.636 37.0803C163.109 36.9541 163.574 36.891 164.031 36.891C164.323 36.891 164.658 36.9265 165.037 36.9975C165.419 37.0645 165.788 37.2045 166.143 37.4173C166.501 37.6302 166.799 37.9515 167.035 38.3812C167.272 38.811 167.39 39.3865 167.39 40.108V46.0924H165.995V44.8624H165.924C165.829 45.0595 165.671 45.2704 165.451 45.4951C165.23 45.7199 164.936 45.9111 164.57 46.0688C164.203 46.2264 163.755 46.3053 163.227 46.3053ZM163.44 45.0516C163.992 45.0516 164.457 44.9432 164.836 44.7264C165.218 44.5096 165.506 44.2297 165.699 43.8867C165.896 43.5437 165.995 43.183 165.995 42.8045V41.5272C165.936 41.5982 165.805 41.6632 165.604 41.7224C165.407 41.7775 165.179 41.8268 164.918 41.8702C164.662 41.9096 164.412 41.9451 164.167 41.9766C163.927 42.0042 163.732 42.0279 163.582 42.0476C163.219 42.0949 162.88 42.1718 162.565 42.2782C162.253 42.3807 162.001 42.5364 161.808 42.7454C161.619 42.9504 161.524 43.2303 161.524 43.5851C161.524 44.07 161.704 44.4366 162.062 44.685C162.425 44.9294 162.884 45.0516 163.44 45.0516ZM173.367 46.2816C172.61 46.2816 171.942 46.0904 171.363 45.708C170.783 45.3217 170.33 44.7776 170.003 44.0759C169.675 43.3702 169.512 42.5364 169.512 41.5745C169.512 40.6205 169.675 39.7926 170.003 39.0909C170.33 38.3891 170.785 37.8471 171.369 37.4647C171.952 37.0822 172.626 36.891 173.391 36.891C173.982 36.891 174.449 36.9896 174.792 37.1867C175.139 37.3799 175.404 37.6007 175.585 37.849C175.77 38.0935 175.914 38.2945 176.017 38.4522H176.135V33.9816H177.53V46.0924H176.182V44.6968H176.017C175.914 44.8624 175.768 45.0713 175.579 45.3237C175.39 45.572 175.12 45.7948 174.769 45.9919C174.418 46.1851 173.951 46.2816 173.367 46.2816ZM173.557 45.028C174.116 45.028 174.589 44.8821 174.976 44.5904C175.362 44.2947 175.656 43.8867 175.857 43.3663C176.058 42.842 176.158 42.2368 176.158 41.5509C176.158 40.8728 176.06 40.2795 175.863 39.7709C175.666 39.2584 175.374 38.8602 174.988 38.5764C174.601 38.2886 174.124 38.1447 173.557 38.1447C172.965 38.1447 172.472 38.2965 172.078 38.6C171.688 38.8997 171.394 39.3077 171.197 39.8241C171.004 40.3366 170.907 40.9122 170.907 41.5509C170.907 42.1974 171.006 42.7848 171.203 43.3131C171.404 43.8374 171.7 44.2553 172.09 44.5667C172.484 44.8742 172.973 45.028 173.557 45.028ZM181.179 49.4986C180.942 49.4986 180.732 49.4789 180.546 49.4394C180.361 49.404 180.233 49.3685 180.162 49.333L180.517 48.103C180.856 48.1897 181.155 48.2213 181.416 48.1976C181.676 48.1739 181.906 48.0577 182.107 47.8487C182.312 47.6437 182.5 47.3106 182.669 46.8493L182.929 46.1397L179.571 37.0093H181.084L183.592 44.2474H183.686L186.194 37.0093H187.708L183.852 47.417C183.678 47.8862 183.464 48.2745 183.207 48.582C182.951 48.8934 182.653 49.124 182.314 49.2739C181.979 49.4237 181.601 49.4986 181.179 49.4986Z" fill="black"/>
    <path d="M400.189 71.5344V57.4052H405.129C406.113 57.4052 406.925 57.5753 407.565 57.9157C408.204 58.2515 408.68 58.7045 408.993 59.2748C409.305 59.8405 409.462 60.4683 409.462 61.1583C409.462 61.7654 409.354 62.2667 409.138 62.6622C408.926 63.0578 408.645 63.3705 408.296 63.6005C407.951 63.8305 407.576 64.0007 407.171 64.111V64.249C407.604 64.2766 408.038 64.4284 408.475 64.7044C408.912 64.9803 409.278 65.3759 409.572 65.891C409.867 66.4061 410.014 67.0362 410.014 67.7813C410.014 68.4896 409.853 69.1267 409.531 69.6924C409.209 70.2581 408.701 70.7065 408.006 71.0377C407.312 71.3688 406.408 71.5344 405.295 71.5344H400.189ZM401.9 70.0166H405.295C406.412 70.0166 407.206 69.8005 407.675 69.3681C408.149 68.9312 408.386 68.4023 408.386 67.7813C408.386 67.303 408.264 66.8615 408.02 66.4567C407.776 66.0474 407.429 65.7208 406.978 65.4771C406.527 65.2287 405.994 65.1045 405.378 65.1045H401.9V70.0166ZM401.9 63.6143H405.074C405.589 63.6143 406.054 63.5131 406.468 63.3108C406.886 63.1084 407.217 62.8232 407.461 62.4553C407.709 62.0873 407.834 61.655 407.834 61.1583C407.834 60.5373 407.617 60.0107 407.185 59.5784C406.753 59.1414 406.067 58.923 405.129 58.923H401.9V63.6143ZM415.723 71.7828C415.051 71.7828 414.442 71.6563 413.894 71.4033C413.347 71.1458 412.912 70.7755 412.591 70.2926C412.269 69.8051 412.108 69.2163 412.108 68.5264C412.108 67.9193 412.227 67.4272 412.466 67.05C412.706 66.6683 413.025 66.3693 413.425 66.1532C413.825 65.937 414.267 65.776 414.75 65.6702C415.237 65.5598 415.727 65.4725 416.219 65.4081C416.863 65.3253 417.385 65.2632 417.786 65.2218C418.19 65.1758 418.485 65.0999 418.669 64.9941C418.857 64.8883 418.951 64.7044 418.951 64.4422V64.387C418.951 63.7063 418.765 63.1774 418.393 62.8002C418.025 62.4231 417.466 62.2345 416.716 62.2345C415.939 62.2345 415.329 62.4047 414.888 62.745C414.446 63.0854 414.136 63.4487 413.957 63.8351L412.411 63.2832C412.687 62.6392 413.055 62.1379 413.515 61.7792C413.98 61.4158 414.485 61.1629 415.033 61.0203C415.585 60.8731 416.127 60.7995 416.661 60.7995C417.001 60.7995 417.392 60.8409 417.834 60.9237C418.28 61.0019 418.71 61.1652 419.124 61.4135C419.542 61.6619 419.89 62.0367 420.166 62.5381C420.442 63.0394 420.58 63.7109 420.58 64.5526V71.5344H418.951V70.0994H418.869C418.758 70.3294 418.574 70.5755 418.317 70.8376C418.059 71.0998 417.717 71.3229 417.289 71.5068C416.861 71.6908 416.339 71.7828 415.723 71.7828ZM415.971 70.3202C416.615 70.3202 417.158 70.1937 417.599 69.9407C418.045 69.6878 418.381 69.3612 418.606 68.9611C418.836 68.5609 418.951 68.1401 418.951 67.6986V66.2084C418.882 66.2911 418.731 66.367 418.496 66.436C418.266 66.5004 417.999 66.5579 417.696 66.6085C417.397 66.6545 417.105 66.6959 416.82 66.7327C416.539 66.7649 416.311 66.7925 416.137 66.8155C415.713 66.8707 415.318 66.9604 414.95 67.0845C414.587 67.2041 414.292 67.3858 414.067 67.6296C413.846 67.8687 413.736 68.1953 413.736 68.6092C413.736 69.1749 413.945 69.6027 414.364 69.8924C414.787 70.1776 415.323 70.3202 415.971 70.3202ZM425.18 57.4052V71.5344H423.551V57.4052H425.18ZM429.79 57.4052V71.5344H428.162V57.4052H429.79ZM437.077 71.7552C436.12 71.7552 435.281 71.5275 434.559 71.0722C433.841 70.6169 433.28 69.9798 432.875 69.1612C432.475 68.3425 432.275 67.3858 432.275 66.2911C432.275 65.1873 432.475 64.2237 432.875 63.4004C433.28 62.5772 433.841 61.9378 434.559 61.4825C435.281 61.0272 436.12 60.7995 437.077 60.7995C438.034 60.7995 438.871 61.0272 439.588 61.4825C440.31 61.9378 440.871 62.5772 441.272 63.4004C441.676 64.2237 441.879 65.1873 441.879 66.2911C441.879 67.3858 441.676 68.3425 441.272 69.1612C440.871 69.9798 440.31 70.6169 439.588 71.0722C438.871 71.5275 438.034 71.7552 437.077 71.7552ZM437.077 70.2926C437.804 70.2926 438.402 70.1063 438.871 69.7338C439.34 69.3612 439.687 68.8714 439.912 68.2643C440.138 67.6572 440.251 66.9994 440.251 66.2911C440.251 65.5828 440.138 64.9228 439.912 64.3111C439.687 63.6994 439.34 63.205 438.871 62.8278C438.402 62.4507 437.804 62.2621 437.077 62.2621C436.35 62.2621 435.752 62.4507 435.283 62.8278C434.814 63.205 434.467 63.6994 434.241 64.3111C434.016 64.9228 433.903 65.5828 433.903 66.2911C433.903 66.9994 434.016 67.6572 434.241 68.2643C434.467 68.8714 434.814 69.3612 435.283 69.7338C435.752 70.1063 436.35 70.2926 437.077 70.2926ZM448.973 60.9375V62.3173H443.481V60.9375H448.973ZM445.082 58.3986H446.71V68.4988C446.71 68.9588 446.776 69.3037 446.91 69.5337C447.048 69.7591 447.223 69.9108 447.434 69.989C447.65 70.0626 447.878 70.0994 448.117 70.0994C448.297 70.0994 448.444 70.0902 448.559 70.0718C448.674 70.0488 448.766 70.0304 448.835 70.0166L449.166 71.4792C449.055 71.5206 448.901 71.562 448.704 71.6034C448.506 71.6494 448.255 71.6724 447.952 71.6724C447.492 71.6724 447.041 71.5735 446.599 71.3757C446.162 71.178 445.799 70.8767 445.509 70.472C445.224 70.0672 445.082 69.5567 445.082 68.9404V58.3986ZM466.379 57.4052H468.09V66.7603C468.09 67.7261 467.862 68.5885 467.407 69.3474C466.956 70.1017 466.319 70.6973 465.496 71.1343C464.673 71.5666 463.707 71.7828 462.598 71.7828C461.49 71.7828 460.524 71.5666 459.701 71.1343C458.877 70.6973 458.238 70.1017 457.783 69.3474C457.332 68.5885 457.107 67.7261 457.107 66.7603V57.4052H458.818V66.6223C458.818 67.3122 458.969 67.9262 459.273 68.4643C459.577 68.9979 460.009 69.4187 460.57 69.7269C461.136 70.0304 461.812 70.1822 462.598 70.1822C463.385 70.1822 464.061 70.0304 464.627 69.7269C465.192 69.4187 465.625 68.9979 465.924 68.4643C466.227 67.9262 466.379 67.3122 466.379 66.6223V57.4052ZM472.914 65.1597V71.5344H471.286V60.9375H472.859V62.5933H472.997C473.245 62.0551 473.622 61.6228 474.128 61.2962C474.634 60.9651 475.287 60.7995 476.088 60.7995C476.805 60.7995 477.433 60.9467 477.971 61.241C478.509 61.5308 478.928 61.9723 479.227 62.5657C479.526 63.1544 479.675 63.8995 479.675 64.801V71.5344H478.047V64.9113C478.047 64.0789 477.831 63.4303 477.398 62.9658C476.966 62.4967 476.373 62.2621 475.619 62.2621C475.099 62.2621 474.634 62.3748 474.225 62.6002C473.82 62.8255 473.501 63.1544 473.266 63.5867C473.031 64.0191 472.914 64.5434 472.914 65.1597ZM482.65 71.5344V60.9375H484.279V71.5344H482.65ZM483.478 59.1713C483.161 59.1713 482.887 59.0632 482.657 58.8471C482.432 58.6309 482.319 58.371 482.319 58.0675C482.319 57.7639 482.432 57.5041 482.657 57.2879C482.887 57.0717 483.161 56.9636 483.478 56.9636C483.796 56.9636 484.067 57.0717 484.292 57.2879C484.522 57.5041 484.637 57.7639 484.637 58.0675C484.637 58.371 484.522 58.6309 484.292 58.8471C484.067 59.0632 483.796 59.1713 483.478 59.1713ZM491.869 60.9375V62.3173H486.378V60.9375H491.869ZM487.978 58.3986H489.606V68.4988C489.606 68.9588 489.673 69.3037 489.806 69.5337C489.944 69.7591 490.119 69.9108 490.331 69.989C490.547 70.0626 490.775 70.0994 491.014 70.0994C491.193 70.0994 491.34 70.0902 491.455 70.0718C491.57 70.0488 491.662 70.0304 491.731 70.0166L492.062 71.4792C491.952 71.5206 491.798 71.562 491.6 71.6034C491.402 71.6494 491.152 71.6724 490.848 71.6724C490.388 71.6724 489.937 71.5735 489.496 71.3757C489.059 71.178 488.696 70.8767 488.406 70.472C488.121 70.0672 487.978 69.5567 487.978 68.9404V58.3986Z" fill="black"/>
    <path d="M580.704 4.94067H462.987V25.7155H580.704V4.94067Z" fill="#2C6A90"/>
    <path d="M603.339 211.265H389.028V271.054H603.339V211.265Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 221.198H490.533C478.669 221.198 469.052 230.039 469.052 240.943C469.052 251.848 478.669 260.688 490.533 260.688H535.265C547.129 260.688 556.746 251.848 556.746 240.943C556.746 230.039 547.129 221.198 535.265 221.198Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 255.009C428.987 255.009 435.206 249.293 435.206 242.242C435.206 235.19 428.987 229.474 421.316 229.474C413.644 229.474 407.425 235.19 407.425 242.242C407.425 249.293 413.644 255.009 421.316 255.009Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M522.307 54.917H520.937C516.634 54.917 513.146 58.4049 513.146 62.7075V71.7965C513.146 76.0991 516.634 79.5871 520.937 79.5871H522.307C526.61 79.5871 530.098 76.0991 530.098 71.7965V62.7075C530.098 58.4049 526.61 54.917 522.307 54.917Z" fill="black" fill-opacity="0.953975"/>
    <path d="M603.339 91.6887H389.028V151.477H603.339V91.6887Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 101.622H490.533C478.669 101.622 469.052 110.462 469.052 121.367C469.052 132.271 478.669 141.111 490.533 141.111H535.265C547.129 141.111 556.746 132.271 556.746 121.367C556.746 110.462 547.129 101.622 535.265 101.622Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 135.433C428.987 135.433 435.206 129.716 435.206 122.665C435.206 115.613 428.987 109.897 421.316 109.897C413.644 109.897 407.425 115.613 407.425 122.665C407.425 129.716 413.644 135.433 421.316 135.433Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M603.339 151.477H389.028V211.265H603.339V151.477Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 161.41H490.533C478.669 161.41 469.052 170.25 469.052 181.155C469.052 192.06 478.669 200.9 490.533 200.9H535.265C547.129 200.9 556.746 192.06 556.746 181.155C556.746 170.25 547.129 161.41 535.265 161.41Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 195.221C428.987 195.221 435.206 189.505 435.206 182.453C435.206 175.402 428.987 169.685 421.316 169.685C413.644 169.685 407.425 175.402 407.425 182.453C407.425 189.505 413.644 195.221 421.316 195.221Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M603.339 271.054H389.028V330.842H603.339V271.054Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 280.987H490.533C478.669 280.987 469.052 289.827 469.052 300.732C469.052 311.636 478.669 320.476 490.533 320.476H535.265C547.129 320.476 556.746 311.636 556.746 300.732C556.746 289.827 547.129 280.987 535.265 280.987Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 314.798C428.987 314.798 435.206 309.082 435.206 302.03C435.206 294.979 428.987 289.262 421.316 289.262C413.644 289.262 407.425 294.979 407.425 302.03C407.425 309.082 413.644 314.798 421.316 314.798Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M603.339 330.842H389.028V390.631H603.339V330.842Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 340.775H490.533C478.669 340.775 469.052 349.615 469.052 360.52C469.052 371.425 478.669 380.265 490.533 380.265H535.265C547.129 380.265 556.746 371.425 556.746 360.52C556.746 349.615 547.129 340.775 535.265 340.775Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 374.586C428.987 374.586 435.206 368.87 435.206 361.819C435.206 354.767 428.987 349.051 421.316 349.051C413.644 349.051 407.425 354.767 407.425 361.819C407.425 368.87 413.644 374.586 421.316 374.586Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M603.339 390.631H389.028V450.419H603.339V390.631Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 400.564H490.533C478.669 400.564 469.052 409.404 469.052 420.308C469.052 431.213 478.669 440.053 490.533 440.053H535.265C547.129 440.053 556.746 431.213 556.746 420.308C556.746 409.404 547.129 400.564 535.265 400.564Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 434.375C428.987 434.375 435.206 428.658 435.206 421.607C435.206 414.555 428.987 408.839 421.316 408.839C413.644 408.839 407.425 414.555 407.425 421.607C407.425 428.658 413.644 434.375 421.316 434.375Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M603.339 450.419H389.028V510.207H603.339V450.419Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 460.352H490.533C478.669 460.352 469.052 469.192 469.052 480.097C469.052 491.001 478.669 499.841 490.533 499.841H535.265C547.129 499.841 556.746 491.001 556.746 480.097C556.746 469.192 547.129 460.352 535.265 460.352Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 494.163C428.987 494.163 435.206 488.447 435.206 481.395C435.206 474.344 428.987 468.627 421.316 468.627C413.644 468.627 407.425 474.344 407.425 481.395C407.425 488.447 413.644 494.163 421.316 494.163Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M603.339 510.207H389.028V569.996H603.339V510.207Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 520.141H490.533C478.669 520.141 469.052 528.981 469.052 539.885C469.052 550.79 478.669 559.63 490.533 559.63H535.265C547.129 559.63 556.746 550.79 556.746 539.885C556.746 528.981 547.129 520.141 535.265 520.141Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 553.952C428.987 553.952 435.206 548.235 435.206 541.184C435.206 534.132 428.987 528.416 421.316 528.416C413.644 528.416 407.425 534.132 407.425 541.184C407.425 548.235 413.644 553.952 421.316 553.952Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M603.339 569.996H389.028V629.784H603.339V569.996Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 579.929H490.533C478.669 579.929 469.052 588.769 469.052 599.674C469.052 610.578 478.669 619.418 490.533 619.418H535.265C547.129 619.418 556.746 610.578 556.746 599.674C556.746 588.769 547.129 579.929 535.265 579.929Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 613.74C428.987 613.74 435.206 608.024 435.206 600.972C435.206 593.921 428.987 588.204 421.316 588.204C413.644 588.204 407.425 593.921 407.425 600.972C407.425 608.024 413.644 613.74 421.316 613.74Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M603.339 629.784H389.028V689.573H603.339V629.784Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 639.717H490.533C478.669 639.717 469.052 648.557 469.052 659.462C469.052 670.367 478.669 679.207 490.533 679.207H535.265C547.129 679.207 556.746 670.367 556.746 659.462C556.746 648.557 547.129 639.717 535.265 639.717Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 673.528C428.987 673.528 435.206 667.812 435.206 660.76C435.206 653.709 428.987 647.993 421.316 647.993C413.644 647.993 407.425 653.709 407.425 660.76C407.425 667.812 413.644 673.528 421.316 673.528Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M603.339 689.573H389.028V749.361H603.339V689.573Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 699.506H490.533C478.669 699.506 469.052 708.346 469.052 719.25C469.052 730.155 478.669 738.995 490.533 738.995H535.265C547.129 738.995 556.746 730.155 556.746 719.25C556.746 708.346 547.129 699.506 535.265 699.506Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 733.317C428.987 733.317 435.206 727.6 435.206 720.549C435.206 713.497 428.987 707.781 421.316 707.781C413.644 707.781 407.425 713.497 407.425 720.549C407.425 727.6 413.644 733.317 421.316 733.317Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M360.064 67.5095H38.1745C24.3693 67.5095 13.178 78.7008 13.178 92.506V960.955C13.178 974.76 24.3693 985.951 38.1745 985.951H360.064C373.869 985.951 385.06 974.76 385.06 960.955V92.506C385.06 78.7008 373.869 67.5095 360.064 67.5095Z" fill="#D6DFD9" stroke="#B6B6B6" stroke-width="6.2129"/>
    <path d="M45.3645 97.0565C45.3645 82.2488 36.1073 70.2449 24.6879 70.2449C13.2685 70.2449 4.01123 82.2488 4.01123 97.0565V959.001C4.01123 973.809 13.2685 985.813 24.6879 985.813C36.1073 985.813 45.3645 973.809 45.3645 959.001V97.0565Z" fill="#C6C9C6"/>
    <path d="M603.339 749.361H389.028V809.149H603.339V749.361Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 759.294H490.533C478.669 759.294 469.052 768.134 469.052 779.039C469.052 789.944 478.669 798.784 490.533 798.784H535.265C547.129 798.784 556.746 789.944 556.746 779.039C556.746 768.134 547.129 759.294 535.265 759.294Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 793.105C428.987 793.105 435.206 787.389 435.206 780.337C435.206 773.286 428.987 767.569 421.316 767.569C413.644 767.569 407.425 773.286 407.425 780.337C407.425 787.389 413.644 793.105 421.316 793.105Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M603.339 809.149H389.028V868.938H603.339V809.149Z" fill="#F4F4F4" fill-opacity="0.953975" stroke="#C6BEBC" stroke-width="2.01815"/>
    <path d="M535.265 819.083H490.533C478.669 819.083 469.052 827.923 469.052 838.827C469.052 849.732 478.669 858.572 490.533 858.572H535.265C547.129 858.572 556.746 849.732 556.746 838.827C556.746 827.923 547.129 819.083 535.265 819.083Z" fill="#2C6A90" stroke="#264D74" stroke-width="1.97324"/>
    <path d="M421.316 852.894C428.987 852.894 435.206 847.177 435.206 840.126C435.206 833.074 428.987 827.358 421.316 827.358C413.644 827.358 407.425 833.074 407.425 840.126C407.425 847.177 413.644 852.894 421.316 852.894Z" fill="#642043" stroke="#2F1117" stroke-width="2.08154"/>
    <path d="M198.067 151.978H380.763Z" fill="#D6DFD9"/>
    <path d="M198.067 151.978H380.763" stroke="white" stroke-width="4.16308"/>
    <path d="M196.311 328.993H379.007Z" fill="#D6DFD9"/>
    <path d="M196.311 328.993H379.007" stroke="white" stroke-width="4.16308"/>
    <path d="M198.067 209.835H380.763Z" fill="#D6DFD9"/>
    <path d="M198.067 209.835H380.763" stroke="white" stroke-width="4.16308"/>
    <path d="M197.353 268.406H380.049Z" fill="#D6DFD9"/>
    <path d="M197.353 268.406H380.049" stroke="white" stroke-width="4.16308"/>
    <path d="M197.025 388.279H379.722Z" fill="#D6DFD9"/>
    <path d="M197.025 388.279H379.722" stroke="white" stroke-width="4.16308"/>
    <path d="M197.382 447.208H380.079Z" fill="#D6DFD9"/>
    <path d="M197.382 447.208H380.079" stroke="white" stroke-width="4.16308"/>
    <path d="M197.739 507.565H380.436Z" fill="#D6DFD9"/>
    <path d="M197.739 507.565H380.436" stroke="white" stroke-width="4.16308"/>
    <path d="M196.224 566.154H378.921Z" fill="#D6DFD9"/>
    <path d="M196.224 566.154H378.921" stroke="white" stroke-width="4.16308"/>
    <path d="M196.729 626.258H379.426Z" fill="#D6DFD9"/>
    <path d="M196.729 626.258H379.426" stroke="white" stroke-width="4.16308"/>
    <path d="M195.719 686.362H378.415Z" fill="#D6DFD9"/>
    <path d="M195.719 686.362H378.415" stroke="white" stroke-width="4.16308"/>
    <path d="M195.719 745.961H378.415Z" fill="#D6DFD9"/>
    <path d="M195.719 745.961H378.415" stroke="white" stroke-width="4.16308"/>
    <path d="M196.224 806.065H378.921Z" fill="#D6DFD9"/>
    <path d="M196.224 806.065H378.921" stroke="white" stroke-width="4.16308"/>
    <path d="M196.224 865.664H378.921Z" fill="#D6DFD9"/>
    <path d="M196.224 865.664H378.921" stroke="white" stroke-width="4.16308"/>
    <path d="M38.5568 38.9205L37.6534 39.1761C37.5966 39.0256 37.5128 38.8793 37.402 38.7372C37.294 38.5923 37.1463 38.473 36.9588 38.3793C36.7713 38.2855 36.5312 38.2386 36.2386 38.2386C35.8381 38.2386 35.5043 38.331 35.2372 38.5156C34.973 38.6974 34.8409 38.929 34.8409 39.2102C34.8409 39.4602 34.9318 39.6577 35.1136 39.8026C35.2955 39.9474 35.5795 40.0682 35.9659 40.1648L36.9375 40.4034C37.5227 40.5455 37.9588 40.7628 38.2457 41.0554C38.5327 41.3452 38.6761 41.7187 38.6761 42.1761C38.6761 42.5511 38.5682 42.8864 38.3523 43.1818C38.1392 43.4773 37.8409 43.7102 37.4574 43.8807C37.0739 44.0511 36.6278 44.1364 36.1193 44.1364C35.4517 44.1364 34.8991 43.9915 34.4616 43.7017C34.0241 43.4119 33.7472 42.9886 33.6307 42.4318L34.5852 42.1932C34.6761 42.5455 34.848 42.8097 35.1009 42.9858C35.3565 43.1619 35.6903 43.25 36.1023 43.25C36.571 43.25 36.9432 43.1506 37.2188 42.9517C37.4972 42.75 37.6364 42.5085 37.6364 42.2273C37.6364 42 37.5568 41.8097 37.3977 41.6562C37.2386 41.5 36.9943 41.3835 36.6648 41.3068L35.5739 41.0511C34.9744 40.9091 34.5341 40.6889 34.2528 40.3906C33.9744 40.0895 33.8352 39.7131 33.8352 39.2614C33.8352 38.892 33.9389 38.5653 34.1463 38.2812C34.3565 37.9972 34.642 37.7741 35.0028 37.6122C35.3665 37.4503 35.7784 37.3693 36.2386 37.3693C36.8864 37.3693 37.3949 37.5114 37.7642 37.7955C38.1364 38.0795 38.4006 38.4545 38.5568 38.9205ZM43.0366 37.4545V38.3068H39.6445V37.4545H43.0366ZM40.6332 35.8864H41.6388V42.125C41.6388 42.4091 41.68 42.6222 41.7624 42.7642C41.8477 42.9034 41.9556 42.9972 42.0863 43.0455C42.2198 43.0909 42.3604 43.1136 42.5082 43.1136C42.619 43.1136 42.7099 43.108 42.7809 43.0966C42.8519 43.0824 42.9087 43.071 42.9513 43.0625L43.1559 43.9659C43.0877 43.9915 42.9925 44.017 42.8704 44.0426C42.7482 44.071 42.5934 44.0852 42.4059 44.0852C42.1218 44.0852 41.8434 44.0241 41.5707 43.902C41.3008 43.7798 41.0763 43.5938 40.8974 43.3438C40.7212 43.0938 40.6332 42.7784 40.6332 42.3977V35.8864Z" fill="black" fill-opacity="0.953975"/>
    <path onClick={onHandleTestClick} id='test' d="M25 38.5C25 32.1487 30.1487 27 36.5 27H84.5C90.8513 27 96 32.1487 96 38.5V38.5C96 44.8513 90.8513 50 84.5 50H36.5C30.1487 50 25 44.8513 25 38.5V38.5Z" fill="#2C6A90"/>
    <path d="M45.5284 35.4062V34.2727H52.2827V35.4062H49.5597V43H48.2472V35.4062H45.5284ZM55.5447 43.1321C54.8999 43.1321 54.3445 42.9943 53.8786 42.7188C53.4155 42.4403 53.0575 42.0497 52.8047 41.5469C52.5547 41.0412 52.4297 40.4489 52.4297 39.7699C52.4297 39.0994 52.5547 38.5085 52.8047 37.9972C53.0575 37.4858 53.4098 37.0866 53.8615 36.7997C54.3161 36.5128 54.8473 36.3693 55.4553 36.3693C55.8246 36.3693 56.1825 36.4304 56.5291 36.5526C56.8757 36.6747 57.1868 36.8665 57.4624 37.1278C57.7379 37.3892 57.9553 37.7287 58.1143 38.1463C58.2734 38.5611 58.353 39.0653 58.353 39.6591V40.1108H53.1499V39.1562H57.1044C57.1044 38.821 57.0362 38.5241 56.8999 38.2656C56.7635 38.0043 56.5717 37.7983 56.3246 37.6477C56.0803 37.4972 55.7933 37.4219 55.4638 37.4219C55.1058 37.4219 54.7933 37.5099 54.5263 37.6861C54.2621 37.8594 54.0575 38.0866 53.9126 38.3679C53.7706 38.6463 53.6996 38.9489 53.6996 39.2756V40.0213C53.6996 40.4588 53.7763 40.831 53.9297 41.1378C54.0859 41.4446 54.3033 41.679 54.5817 41.8409C54.8601 42 55.1854 42.0795 55.5575 42.0795C55.799 42.0795 56.0192 42.0455 56.218 41.9773C56.4169 41.9062 56.5888 41.8011 56.7337 41.6619C56.8786 41.5227 56.9893 41.3509 57.0661 41.1463L58.272 41.3636C58.1754 41.7187 58.0021 42.0298 57.7521 42.2969C57.505 42.5611 57.1939 42.767 56.8189 42.9148C56.4467 43.0597 56.022 43.1321 55.5447 43.1321ZM64.6715 38.0526L63.5167 38.2571C63.4684 38.1094 63.3917 37.9687 63.2866 37.8352C63.1843 37.7017 63.0451 37.5923 62.869 37.5071C62.6928 37.4219 62.4727 37.3793 62.2085 37.3793C61.8477 37.3793 61.5465 37.4602 61.305 37.6222C61.0636 37.7812 60.9428 37.9872 60.9428 38.2401C60.9428 38.4588 61.0238 38.6349 61.1857 38.7685C61.3477 38.902 61.609 39.0114 61.9698 39.0966L63.0096 39.3352C63.6119 39.4744 64.0607 39.6889 64.3562 39.9787C64.6516 40.2685 64.7994 40.6449 64.7994 41.108C64.7994 41.5 64.6857 41.8494 64.4585 42.1562C64.234 42.4602 63.9201 42.6989 63.5167 42.8722C63.1161 43.0455 62.6516 43.1321 62.1232 43.1321C61.3903 43.1321 60.7923 42.9759 60.3292 42.6634C59.8661 42.348 59.582 41.9006 59.4769 41.321L60.7085 41.1335C60.7852 41.4545 60.9428 41.6974 61.1815 41.8622C61.4201 42.0241 61.7312 42.1051 62.1147 42.1051C62.5323 42.1051 62.8661 42.0185 63.1161 41.8452C63.3661 41.669 63.4911 41.4545 63.4911 41.2017C63.4911 40.9972 63.4144 40.8253 63.261 40.6861C63.1104 40.5469 62.8789 40.4418 62.5664 40.3707L61.4585 40.1278C60.8477 39.9886 60.396 39.767 60.1033 39.4631C59.8136 39.1591 59.6687 38.7741 59.6687 38.3082C59.6687 37.9219 59.7766 37.5838 59.9925 37.294C60.2085 37.0043 60.5067 36.7784 60.8874 36.6165C61.2681 36.4517 61.7042 36.3693 62.1957 36.3693C62.9031 36.3693 63.4599 36.5227 63.8661 36.8295C64.2724 37.1335 64.5408 37.5412 64.6715 38.0526ZM69.2557 36.4545V37.4773H65.6804V36.4545H69.2557ZM66.6392 34.8864H67.9134V41.0781C67.9134 41.3253 67.9503 41.5114 68.0241 41.6364C68.098 41.7585 68.1932 41.8423 68.3097 41.8878C68.429 41.9304 68.5582 41.9517 68.6974 41.9517C68.7997 41.9517 68.8892 41.9446 68.9659 41.9304C69.0426 41.9162 69.1023 41.9048 69.1449 41.8963L69.375 42.9489C69.3011 42.9773 69.196 43.0057 69.0597 43.0341C68.9233 43.0653 68.7528 43.0824 68.5483 43.0852C68.2131 43.0909 67.9006 43.0312 67.6108 42.9062C67.321 42.7812 67.0866 42.5881 66.9077 42.3267C66.7287 42.0653 66.6392 41.7372 66.6392 41.3423V34.8864Z" fill="white"/>
    </svg>
  )
}

export default VoterMachine